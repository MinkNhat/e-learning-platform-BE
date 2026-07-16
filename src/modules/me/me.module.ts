import { Module } from '@nestjs/common';
import { MeService } from './me.service';
import { MeController } from './me.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrolment, EnrolmentSchema } from '../enrollments/schemas/enrolment.schema';
import { Course, CourseSchema } from '../courses/schemas/course.schema';
import { Lesson, LessonSchema } from '../lessons/schemas/lesson.schema';
import { LessonProgress, LessonProgressSchema } from './schemas/lesson-progress.schema';
import { CoursesModule } from '../courses/courses.module';
import { User, UserSchema } from '../users/schemas/user.schema';

@Module({
  imports: [
    CoursesModule,
    MongooseModule.forFeature([
      { name: Enrolment.name, schema: EnrolmentSchema },
      { name: Course.name, schema: CourseSchema },
      { name: Lesson.name, schema: LessonSchema },
      { name: LessonProgress.name, schema: LessonProgressSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [MeController],
  providers: [MeService]
})
export class MeModule {}
