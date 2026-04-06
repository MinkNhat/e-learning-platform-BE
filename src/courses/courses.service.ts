import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course, CourseDocument } from './schemas/course.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>) {}

  create = async (createCourseDto: CreateCourseDto, user: IUser) => {
    return await this.courseModel.create({
      ...createCourseDto,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    })
  }

  findAll = async (currentPage: number, limit: number, qs: string) => {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.courseModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.courseModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems
      },
      result
    }
  }

  findOne = async (id: string) => {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException("course not found");
    return await this.courseModel.findOne({_id: id})
  }

  update = async (id: string, updateCourseDto: UpdateCourseDto, user: IUser) => {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException("course not found");
    return await this.courseModel.updateOne(
      {_id: id}, 
      {
        ...updateCourseDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    );
  }

  remove = async (id: string, user: IUser) => {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException("course not found");
    await this.courseModel.updateOne(
      {_id: id}, {
      deletedBy: {
        _id: user._id,
        email: user.email
      }
    });
    
    return this.courseModel.softDelete({_id: id});
  }
}
