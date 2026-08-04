import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from '../courses/schemas/course.schema';
import {
  Enrolment,
  EnrolmentSchema,
} from '../enrollments/schemas/enrolment.schema';
import { Lesson, LessonSchema } from '../lessons/schemas/lesson.schema';
import {
  Module as CourseModule,
  ModuleSchema,
} from '../modules/schemas/module.schema';
import { RagController } from './rag.controller';
import { RagService } from './rag.service';
import {
  RagConversation,
  RagConversationSchema,
} from './schemas/rag-conversation.schema';
import { RagMessage, RagMessageSchema } from './schemas/rag-message.schema';

@Module({
  imports: [
    ConfigModule,
    JwtModule.register({}),
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: CourseModule.name, schema: ModuleSchema },
      { name: Lesson.name, schema: LessonSchema },
      { name: Enrolment.name, schema: EnrolmentSchema },
      { name: RagConversation.name, schema: RagConversationSchema },
      { name: RagMessage.name, schema: RagMessageSchema },
    ]),
  ],
  controllers: [RagController],
  providers: [RagService],
})
export class RagModule {}
