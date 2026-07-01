import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './modules/blogs/schemas/blog.schema';
import { Course } from './modules/courses/schemas/course.schema';
import { Enrolment } from './modules/enrollments/schemas/enrolment.schema';
import { Order } from './modules/orders/schemas/order.schema';
import { Payment } from './modules/payments/schemas/payment.schema';
import { User } from './modules/users/schemas/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Course.name) private courseModel: Model<Course>,
    @InjectModel(Blog.name) private blogModel: Model<Blog>,
    @InjectModel(Enrolment.name) private enrolmentModel: Model<Enrolment>,
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getDashboardStats() {
    const [
      users,
      courses,
      publishedCourses,
      blogs,
      enrollments,
      orders,
      payments,
    ] = await Promise.all([
      this.userModel.countDocuments(),
      this.courseModel.countDocuments(),
      this.courseModel.countDocuments({ isPublished: true }),
      this.blogModel.countDocuments(),
      this.enrolmentModel.countDocuments(),
      this.orderModel.countDocuments(),
      this.paymentModel.countDocuments(),
    ]);

    return {
      users,
      courses,
      publishedCourses,
      draftCourses: courses - publishedCourses,
      blogs,
      enrollments,
      orders,
      payments,
    };
  }
}
