import { BadRequestException, Injectable } from '@nestjs/common';
import { Enrolment } from './schemas/enrolment.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Course } from '../courses/schemas/course.schema';
import { Order } from '../orders/schemas/order.schema';
import { PaymentStatus } from 'src/core/enums/payment.enum';
import aqp from 'api-query-params';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectModel(Enrolment.name) private enrolmentModel: Model<Enrolment>,
    @InjectModel(Course.name) private courseModel: Model<Course>,
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  async isEnrolled(userId: string, courseId: string) {
    if(!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(courseId)) {
      throw new BadRequestException('Invalid user or course ID');
    }

    const existed = await this.enrolmentModel.exists({ user: userId, course: courseId });
    return {
      isEnrolled: !!existed
    };
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    const page = +currentPage || 1;
    const pageSize = +limit || 10;
    const offset = (page - 1) * pageSize;

    const totalItems = await this.enrolmentModel.countDocuments(filter);
    const result = await this.enrolmentModel.find(filter)
      .skip(offset)
      .limit(pageSize)
      .sort(sort as any)
      .populate({ path: 'user', select: '_id name email' })
      .populate({ path: 'course', select: '_id title price slug' })
      .populate({ path: 'order', select: '_id amount currency status payment createdAt' })
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

  async enroll(userId: string, courseId: string, orderId: string) {
    return this.enrolmentModel.create({
      order: orderId,
      user: userId,
      course: courseId,
      enrolDate: new Date(),
    });
  }

  async enrollManual(userId: string, courseId: string) {
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(courseId)) {
      throw new BadRequestException('Invalid user or course ID');
    }

    const existed = await this.enrolmentModel.exists({ user: userId, course: courseId, isActive: true });
    if (existed) throw new BadRequestException('User đã sở hữu khoá học này');

    const course = await this.courseModel.findById(courseId);
    if (!course) throw new BadRequestException('Khoá học không tồn tại');

    const order = await this.orderModel.create({
      user: userId,
      course: courseId,
      amount: Number(course.price || 0),
      status: PaymentStatus.PAID,
    });

    try {
      return await this.enroll(userId, courseId, String(order._id));
    } catch (error) {
      throw new BadRequestException('User đã sở hữu khoá học này');
    }
  }

  async enrollFree(userId: string, courseId: string) {
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(courseId)) {
      throw new BadRequestException('Invalid user or course ID');
    }

    const existed = await this.enrolmentModel.exists({ user: userId, course: courseId, isActive: true });
    if (existed) throw new BadRequestException('Bạn đã sở hữu khoá học này');

    const course = await this.courseModel.findOne({ _id: courseId, isPublished: true });
    if (!course) throw new BadRequestException('Khoá học không tồn tại');
    if (course.price != null && Number(course.price) > 0) {
      throw new BadRequestException('Khoá học này yêu cầu thanh toán');
    }

    const order = await this.orderModel.create({
      user: userId,
      course: courseId,
      amount: 0,
      status: PaymentStatus.PAID,
    });

    try {
      return await this.enroll(userId, courseId, String(order._id));
    } catch (error: any) {
      if (error?.code === 11000) throw new BadRequestException('Bạn đã sở hữu khoá học này');
      throw error;
    }
  }
}
