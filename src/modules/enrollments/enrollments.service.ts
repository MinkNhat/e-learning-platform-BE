import { BadRequestException, Injectable } from '@nestjs/common';
import { Enrolment } from './schemas/enrolment.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Course } from '../courses/schemas/course.schema';
import { Order } from '../orders/schemas/order.schema';
import { PaymentStatus } from 'src/core/enums/payment.enum';

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

  async enroll(userId: string, courseId: string, orderId: string) {
    return this.enrolmentModel.create({
      order: orderId,
      user: userId,
      course: courseId,
      enrolDate: new Date(),
    });
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
