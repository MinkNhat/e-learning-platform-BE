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

@Injectable()
export class ModulesService {
  constructor(
    @InjectModel(Module.name) private moduleModel: SoftDeleteModel<ModuleDocument>,
    @InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>
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

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.moduleModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.moduleModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select(projection as any)
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems
      },
      result
    };
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`Module with id='${id}' not found`);
    return await this.moduleModel.findById(id).populate({
      path: 'lessons',
      select: { _id: 1, name: 1, type: 1 }
    });
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
