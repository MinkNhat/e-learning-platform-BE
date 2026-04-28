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

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
    @InjectModel(VnpayTransaction.name) private vnpayTxnModel: Model<VnpayTransaction>,
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private readonly enrollmentsService: EnrollmentsService,
  ) {}

  async initiatePayment(userId: string, createPaymentDto: CreatePaymentDto, ip: string) {
    const { courseId, amount, provider } = createPaymentDto;

    // Check enroll
    const existed = await this.enrollmentsService.isEnrolled(userId, courseId);
    if (existed.isEnrolled) throw new BadRequestException('Bạn đã sở hữu khoá học này');

    const order = await this.orderModel.create({
      user: userId,
      course: courseId,
      amount,
    });

    const payment = await this.paymentModel.create({
      order: order._id,
      user: userId,
      provider,
      amount,
    });

    const vnpTxnRef = `${order._id}-${Date.now()}`;
    await this.vnpayTxnModel.create({
      payment: payment._id,
      vnpTxnRef,
    });

    const paymentUrl = createVnpayUrl(
      vnpTxnRef,
      amount,
      `Thanh toán khoá học ${courseId}`,
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
}