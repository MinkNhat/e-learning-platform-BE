import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { Lesson, LessonSchema } from './schemas/lesson.schema';
import { ModuleSchema } from '../modules/schemas/module.schema';
import { Module as ModuleModel } from '../modules/schemas/module.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Lesson.name, schema: LessonSchema },
    { name: ModuleModel.name, schema: ModuleSchema }
  ])],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [LessonsService]
})
export class LessonsModule {}
