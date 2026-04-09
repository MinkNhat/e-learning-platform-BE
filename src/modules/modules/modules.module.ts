import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { Module as ModuleModel, ModuleSchema } from './schemas/module.schema';
import { Course, CourseSchema } from '../courses/schemas/course.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: ModuleModel.name, schema: ModuleSchema },
    { name: Course.name, schema: CourseSchema }
  ])],
  controllers: [ModulesController],
  providers: [ModulesService],
  exports: [ModulesService]
})
export class ModulesModule {}
