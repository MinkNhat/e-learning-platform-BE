import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { Lesson, LessonSchema } from './schemas/lesson.schema';
import { ModuleSchema } from '../modules/schemas/module.schema';
import { Module as ModuleModel } from '../modules/schemas/module.schema';
import { YtbService } from 'src/utils/ytb.service';
import { Course, CourseSchema } from '../courses/schemas/course.schema';
import { Quiz, QuizSchema } from '../quizzes/schemas/quiz.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Lesson.name, schema: LessonSchema },
    { name: ModuleModel.name, schema: ModuleSchema },
    { name: Course.name, schema: CourseSchema },
    { name: Quiz.name, schema: QuizSchema },
  ])],
  controllers: [LessonsController],
  providers: [
    LessonsService,
    YtbService,
  ],
  exports: [LessonsService]
})
export class LessonsModule {}
