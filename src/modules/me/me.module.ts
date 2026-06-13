import { Module } from '@nestjs/common';
import { MeService } from './me.service';
import { MeController } from './me.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrolment, EnrolmentSchema } from '../enrollments/schemas/enrolment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Enrolment.name, schema: EnrolmentSchema },
    ]),
  ],
  controllers: [MeController],
  providers: [MeService]
})
export class MeModule {}
