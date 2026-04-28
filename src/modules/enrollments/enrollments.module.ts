import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrolment, EnrolmentSchema } from './schemas/enrolment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Enrolment.name, schema: EnrolmentSchema },
    ])
  ],
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService],
  exports: [EnrollmentsService],
})
export class EnrollmentsModule {}
