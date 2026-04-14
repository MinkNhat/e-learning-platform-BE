import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course, CourseDocument } from './schemas/course.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/modules/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { Module, ModuleDocument } from '../modules/schemas/module.schema';
import { Lesson, LessonDocument } from '../lessons/schemas/lesson.schema';
import { SlugService } from 'src/utils/slug.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>,
    @InjectModel(Module.name) private moduleModel: SoftDeleteModel<ModuleDocument>,
    @InjectModel(Lesson.name) private lessonModel: SoftDeleteModel<LessonDocument>,
    private slugService: SlugService,
  ) {}

  async create(createCourseDto: CreateCourseDto, user: IUser) {
    if (!createCourseDto.authors.includes(user.name)) {
      createCourseDto.authors.unshift(user.name);
    }

    const slug = await this.slugService.generate(this.courseModel, createCourseDto.title);

    const newCourse = await this.courseModel.create({
      ...createCourseDto,
      slug,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    })

    return {
      _id: newCourse?._id,
      name: newCourse?.title,
      createdAt: newCourse?.createdAt
    };
  }

  async findAll(currentPage: number, limit: number, qs: string) {
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
      .select(projection)
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

  async findOne(id: string) {
    const course = await this.courseModel.findById(id).lean();
    if (!mongoose.Types.ObjectId.isValid(id) || !course) throw new BadRequestException(`course with id=${id} not found`);

    const modules = await this.moduleModel.find({ course: id }).select({ _id: 1, name: 1, order: 1 }).sort({ order: 1 });
    const moduleIds = modules.map((m) => m._id);

    // Group lessons by module
    const lessons = await this.lessonModel.find({ module: { $in: moduleIds } }).select({ _id: 1, name: 1, type: 1, module: 1, order: 1 }).sort({ order: 1 });
    const lessonsMap = new Map<string, any[]>();
    for (const lesson of lessons) {
      const key = lesson.module.toString();
      if (!lessonsMap.has(key)) { lessonsMap.set(key, []) }

      lessonsMap.get(key)!.push({
        _id: lesson._id,
        name: lesson.name,
        type: lesson.type,
        order: lesson.order,
      });
    }

    return {
      ...course,
      modules: modules.map((m) => ({
        _id: m._id,
        name: m.name,
        order: m.order,
        lessons: lessonsMap.get(m._id.toString()) || [],
      }))
    };
}

  async update(id: string, updateCourseDto: UpdateCourseDto, user: IUser) {
    const course = await this.courseModel.findById(id);
    if(!mongoose.Types.ObjectId.isValid(id) || !course) throw new BadRequestException(`course with id=${id} not found`);

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

  async remove(id: string, user: IUser) {
    const course = await this.courseModel.findById(id);
    if(!mongoose.Types.ObjectId.isValid(id) || !course) throw new BadRequestException(`course with id=${id} not found`);

    // delete modules and lessons of course
    const modules = await this.moduleModel.find({ course: id }).select({ _id: 1 });
    const moduleIds = modules.map((m) => m._id);
    await this.lessonModel.deleteMany({ module: { $in: moduleIds } });
    await this.moduleModel.deleteMany({ course: id });

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
