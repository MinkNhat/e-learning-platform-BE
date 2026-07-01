import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Payment } from "./schemas/payment.schema";
import { VnpayTransaction } from "./schemas/vnpay-transaction.schema";
import { Order } from "../orders/schemas/order.schema";
import { Model } from "mongoose";
import { EnrollmentsService } from "../enrollments/enrollments.service";
import { createVnpayUrl, verifyVnpaySignature } from "./vnpay/vnpay.helper";
import { PaymentStatus, VnpayTransactionStatus } from "src/core/enums/payment.enum";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { Course } from "../courses/schemas/course.schema";
import aqp from 'api-query-params';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
    @InjectModel(VnpayTransaction.name) private vnpayTxnModel: Model<VnpayTransaction>,
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(Course.name) private courseModel: Model<Course>,
    private readonly enrollmentsService: EnrollmentsService,
  ) {}

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    const page = +currentPage || 1;
    const pageSize = +limit || 10;
    const offset = (page - 1) * pageSize;

    const totalItems = await this.paymentModel.countDocuments(filter);
    const result = await this.paymentModel.find(filter)
      .skip(offset)
      .limit(pageSize)
      .sort(sort as any)
      .populate({ path: 'user', select: '_id name email' })
      .populate({
        path: 'order',
        select: '_id course amount currency status createdAt',
        populate: { path: 'course', select: '_id title price' },
      })
      .select(projection as any)
      .exec();

    return {
      meta: {
        current: page,
        pageSize,
        pages: Math.ceil(totalItems / pageSize),
        total: totalItems,
      },
      result,
    };
  }

  async initiatePayment(userId: string, createPaymentDto: CreatePaymentDto, ip: string) {
    const { courseId, provider } = createPaymentDto;

    // Check enrollment
    const existed = await this.enrollmentsService.isEnrolled(userId, courseId);
    if (existed.isEnrolled) throw new BadRequestException('Bạn đã sở hữu khoá học này');

    const course = await this.courseModel.findById(courseId);
    if (!course) throw new BadRequestException('Khoá học không tồn tại');
    if (course.price == null || Number(course.price) <= 0) {
      throw new BadRequestException('Khoá học miễn phí không cần thanh toán');
    }

    const order = await this.orderModel.create({
      user: userId,
      course: courseId,
      amount: course.price,
    });

    const payment = await this.paymentModel.create({
      order: order._id,
      user: userId,
      provider,
      amount: course.price,
    });

    const vnpTxnRef = `${order._id}-${Date.now()}`;
    await this.vnpayTxnModel.create({
      payment: payment._id,
      vnpTxnRef,
    });

    const paymentUrl = createVnpayUrl(
      vnpTxnRef,
      course.price,
      `Thanh toán khoá học ${course.id}`,
      ip,
    );

    return { paymentUrl, orderId: order._id };
  }

  async handleIpn(query: Record<string, string>) {
    if (!verifyVnpaySignature(query)) {
      return { RspCode: '97', Message: 'Invalid signature' };
    }

    const { vnp_TxnRef, vnp_ResponseCode, vnp_TransactionNo, vnp_BankCode, vnp_BankTranNo, vnp_CardType, vnp_PayDate } = query;

    // find transaction
    const txn = await this.vnpayTxnModel.findOne({ vnpTxnRef: vnp_TxnRef });
    if (!txn) return { RspCode: '01', Message: 'Order not found' };

    // Next if initiated
    if (txn.status !== VnpayTransactionStatus.INITIATED) {
      return { RspCode: '02', Message: 'Order already confirmed' };
    }

    const isSuccess = vnp_ResponseCode === '00';
    await txn.updateOne({
      status: isSuccess ? VnpayTransactionStatus.SUCCESS : VnpayTransactionStatus.FAILED,
      vnpTransactionNo: vnp_TransactionNo,
      vnpBankCode: vnp_BankCode,
      vnpBankTranNo: vnp_BankTranNo,
      vnpCardType: vnp_CardType,
      vnpResponseCode: vnp_ResponseCode,
      vnpPayDate: vnp_PayDate,
      rawResponse: query,
    });

    const payment = await this.paymentModel.findById(txn.payment);

    if (isSuccess) {
      // Update Payment + Order
      await payment.updateOne({ status: PaymentStatus.PAID });
      const order = await this.orderModel.findByIdAndUpdate(
        payment.order,
        { status: PaymentStatus.PAID, payment: payment._id },
        { new: true },
      );

      // Enroll user to course
      await this.enrollmentsService.enroll(
        String(order.user),
        String(order.course),
        String(order._id),
      );
    } else {
      await payment.updateOne({ status: PaymentStatus.FAILED });
      await this.orderModel.findByIdAndUpdate(payment.order, {
        status: PaymentStatus.FAILED,
      });
    }

    return { RspCode: '00', Message: 'Confirm Success' };
  }

  async handleReturn(query: Record<string, string>) {
    const isValid = verifyVnpaySignature(query);
    const success =
      isValid &&
      query.vnp_ResponseCode === '00' &&
      query.vnp_TransactionStatus === '00';
    const code = query.vnp_ResponseCode || '01';

    const txn = query.vnp_TxnRef
      ? await this.vnpayTxnModel.findOne({ vnpTxnRef: query.vnp_TxnRef })
      : null;
    const payment = txn ? await this.paymentModel.findById(txn.payment) : null;
    const order = payment ? await this.orderModel.findById(payment.order) : null;

    return {
      success,
      code,
      isValid,
      txnRef: query.vnp_TxnRef,
      orderId: order?._id ? String(order._id) : '',
      courseId: order?.course ? String(order.course) : '',
    };
  }
}
