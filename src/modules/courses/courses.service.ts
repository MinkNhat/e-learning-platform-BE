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
import { Category, CategoryDocument } from '../categories/schemas/category.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>,
    @InjectModel(Module.name) private moduleModel: SoftDeleteModel<ModuleDocument>,
    @InjectModel(Lesson.name) private lessonModel: SoftDeleteModel<LessonDocument>,
    @InjectModel(Category.name) private categoryModel: SoftDeleteModel<CategoryDocument>,
    private slugService: SlugService,
  ) {}

  private getCourseLookupQuery(courseIdOrSlug: string) {
    if (mongoose.Types.ObjectId.isValid(courseIdOrSlug)) {
      return { $or: [{ _id: courseIdOrSlug }, { slug: courseIdOrSlug }] };
    }

    return { slug: courseIdOrSlug };
  }

  async create(createCourseDto: CreateCourseDto, user: IUser) {
    const category = await this.categoryModel.findById(createCourseDto.category);
    if (!category) throw new BadRequestException(`category with id=${createCourseDto.category} not found`);

    const authors = createCourseDto.authors?.length ? createCourseDto.authors : [user._id];

    const slug = await this.slugService.generate(this.courseModel, createCourseDto.title);

    const newCourse = await this.courseModel.create({
      ...createCourseDto,
      authors,
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

    let finalPopulation = population || [];
    if (!finalPopulation.some(p => p.path === 'category')) {
      finalPopulation.push({ path: 'category', select: 'name slug' });
    }
    if (!finalPopulation.some(p => p.path === 'authors')) {
      finalPopulation.push({ path: 'authors', select: '_id name avatar' });
    }

    const result = await this.courseModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(finalPopulation)
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

  async findOne(courseIdOrSlug: string): Promise<any> {
    const course = await this.courseModel.findOne(this.getCourseLookupQuery(courseIdOrSlug))
      .populate([
        { path: 'category', select: '_id name slug' }, 
        { path: 'authors', select: '_id name avatar' },
      ])
      .lean();
    if (!course) throw new BadRequestException(`course with id or slug=${courseIdOrSlug} not found`);

    const modules = await this.moduleModel.find({ course: course._id }).select({ _id: 1, name: 1, order: 1 }).sort({ order: 1 });
    const moduleIds = modules.map((m) => m._id);

    const lessons = await this.lessonModel.find({ module: { $in: moduleIds } }).select({ _id: 1, name: 1, type: 1, order: 1, isFree: 1, metadata: 1, module: 1 }).sort({ order: 1 });
    const lessonsMap = new Map<string, any[]>();
    
    for (const lesson of lessons) {
      const key = lesson.module.toString();
      if (!lessonsMap.has(key)) { lessonsMap.set(key, []) }

      lessonsMap.get(key)!.push({
        _id: lesson._id,
        name: lesson.name,
        type: lesson.type,
        order: lesson.order,
        isFree: lesson.isFree,
        metadata: {
          duration: lesson.metadata?.duration,
          durationString: lesson.metadata?.durationString,
        }
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

  async findOneForManage(courseIdOrSlug: string): Promise<any> {
    const course = await this.courseModel.findOne(this.getCourseLookupQuery(courseIdOrSlug))
      .populate([
        { path: 'category', select: '_id name slug' },
        { path: 'authors', select: '_id name avatar' },
      ])
      .lean();
    if (!course) throw new BadRequestException(`course with id or slug=${courseIdOrSlug} not found`);

    const modules = await this.moduleModel.find({ course: course._id }).sort({ order: 1 });
    const moduleIds = modules.map((m) => m._id);

    const lessons = await this.lessonModel.find({ module: { $in: moduleIds } }).sort({ order: 1 });
    const lessonsMap = new Map<string, any[]>();

    for (const lesson of lessons) {
      const key = lesson.module.toString();
      if (!lessonsMap.has(key)) { lessonsMap.set(key, []) }

      lessonsMap.get(key)!.push({
        _id: lesson._id,
        name: lesson.name,
        type: lesson.type,
        order: lesson.order,
        content: lesson.content,
        isActive: lesson.isActive,
        isFree: lesson.isFree,
        metadata: lesson.metadata,
      });
    }

    return {
      ...course,
      modules: modules.map((m) => ({
        _id: m._id,
        name: m.name,
        description: m.description,
        order: m.order,
        isActive: m.isActive,
        totalLessons: m.totalLessons,
        totalLength: m.totalLength,
        lessons: lessonsMap.get(m._id.toString()) || [],
      }))
    };
  }

  async update(id: string, updateCourseDto: UpdateCourseDto, user: IUser) {
    const course = await this.courseModel.findById(id);
    if(!mongoose.Types.ObjectId.isValid(id) || !course) throw new BadRequestException(`course with id=${id} not found`);

    const category = await this.categoryModel.findById(updateCourseDto.category);
    if (!category) throw new BadRequestException(`category with id=${updateCourseDto.category} not found`);

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
