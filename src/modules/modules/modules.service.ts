import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Module, ModuleDocument } from './schemas/module.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/modules/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { Course, CourseDocument } from '../courses/schemas/course.schema';
import { Lesson, LessonDocument } from '../lessons/schemas/lesson.schema';

@Injectable()
export class ModulesService {
  constructor(
    @InjectModel(Module.name) private moduleModel: SoftDeleteModel<ModuleDocument>,
    @InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>,
    @InjectModel(Lesson.name) private lessonModel: SoftDeleteModel<LessonDocument>,
  ) {}

  async create(createModuleDto: CreateModuleDto, user: IUser) {
    const course = await this.courseModel.findOne({ _id: createModuleDto.course });
    if (!course) throw new BadRequestException(`Course with id='${createModuleDto.course}' not found`);

    const newModule = await this.moduleModel.create({
      ...createModuleDto,
      course: course._id,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    });

    return {
      _id: newModule?._id,
      name: newModule?.name,
      createdAt: newModule?.createdAt
    };
  }

  async update(id: string, updateModuleDto: UpdateModuleDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`Module with id='${id}' not found`);

    return await this.moduleModel.updateOne(
      { _id: id },
      {
        ...updateModuleDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      });
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`Module with id='${id}' not found`);
    this.lessonModel.deleteMany({ module: id });

    await this.moduleModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        }
      });
    return this.moduleModel.softDelete({
      _id: id
    });
  }
}
