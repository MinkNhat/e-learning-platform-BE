import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrolment, EnrolmentSchema } from './schemas/enrolment.schema';
import { Course, CourseSchema } from '../courses/schemas/course.schema';
import { Order, OrderSchema } from '../orders/schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Enrolment.name, schema: EnrolmentSchema },
      { name: Course.name, schema: CourseSchema },
      { name: Order.name, schema: OrderSchema },
    ])
  ],
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService],
  exports: [EnrollmentsService],
})
export class EnrollmentsModule {}
