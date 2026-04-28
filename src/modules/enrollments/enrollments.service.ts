import { BadRequestException, Injectable } from '@nestjs/common';
import { Enrolment } from './schemas/enrolment.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Mongoose } from 'mongoose';

@Injectable()
export class EnrollmentsService {
  constructor(@InjectModel(Enrolment.name) private enrolmentModel: Model<Enrolment>) {}

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
}
