import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schemas/course.schema';
import { ModuleSchema } from '../modules/schemas/module.schema';
import { Module as ModuleModel } from '../modules/schemas/module.schema';
import { Lesson, LessonSchema } from '../lessons/schemas/lesson.schema';
import { SlugService } from 'src/utils/slug.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: ModuleModel.name, schema: ModuleSchema },
      { name: Lesson.name, schema: LessonSchema },
    ]),
],
  controllers: [CoursesController],
  providers: [
    CoursesService,
    SlugService,
  ],
  exports: [CoursesService]
})
export class CoursesModule {}
