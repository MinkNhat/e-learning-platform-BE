import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schemas/course.schema';
import { ModuleSchema } from '../modules/schemas/module.schema';
import { Module as ModuleModel } from '../modules/schemas/module.schema';
import { Lesson, LessonSchema } from '../lessons/schemas/lesson.schema';
import { SlugService } from 'src/utils/slug.service';
import { Category, CategorySchema } from '../categories/schemas/category.schema';
import { CourseContentService } from './course-content.service';
import { Enrolment, EnrolmentSchema } from '../enrollments/schemas/enrolment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: ModuleModel.name, schema: ModuleSchema },
      { name: Lesson.name, schema: LessonSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Enrolment.name, schema: EnrolmentSchema },
    ]),
  ],
  controllers: [CoursesController],
  providers: [
    CoursesService,
    CourseContentService,
    SlugService,
  ],
  exports: [CoursesService, CourseContentService]
})
export class CoursesModule {}
