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
import { CourseContentService } from './course-content.service';
import { Enrolment, EnrolmentDocument } from '../enrollments/schemas/enrolment.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>,
    @InjectModel(Module.name) private moduleModel: SoftDeleteModel<ModuleDocument>,
    @InjectModel(Lesson.name) private lessonModel: SoftDeleteModel<LessonDocument>,
    @InjectModel(Category.name) private categoryModel: SoftDeleteModel<CategoryDocument>,
    @InjectModel(Enrolment.name) private enrolmentModel: SoftDeleteModel<EnrolmentDocument>,
    private slugService: SlugService,
    private courseContentService: CourseContentService,
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

  async findAll(currentPage: number, limit: number, qs: string, excludeEnrolled = false, userId?: string, includeUnpublished = false) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const finalFilter: Record<string, any> = includeUnpublished ? { ...filter } : { ...filter, isPublished: true };

    // Exclude enrolled courses if requested
    if (excludeEnrolled && userId && mongoose.Types.ObjectId.isValid(userId)) {
      const enrolledCourseIds = await this.enrolmentModel.distinct('course', {
        user: userId,
        isActive: true,
      });
      finalFilter._id = { $nin: enrolledCourseIds };
    }

    const totalItems = await this.courseModel.countDocuments(finalFilter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    let finalPopulation = population || [];
    if (!finalPopulation.some(p => p.path === 'category')) {
      finalPopulation.push({ path: 'category', select: 'name slug' });
    }
    if (!finalPopulation.some(p => p.path === 'authors')) {
      finalPopulation.push({ path: 'authors', select: '_id name avatar' });
    }

    const result = await this.courseModel.find(finalFilter)
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

  async search(query: string, page: number, limit: number, scope?: string): Promise<any> {
    const keyword = query?.trim();
    if (!keyword) {
      throw new BadRequestException('Query parameter q is required');
    }

    const currentPage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
    const pageSize = Number.isFinite(limit) && limit > 0 ? Math.min(Math.floor(limit), 100) : 10;
    const titlePattern = new RegExp(this.escapeRegExp(keyword), 'i');

    const [courseTitleMatches, lessonTitleMatches] = await Promise.all([
      this.courseModel.find({ title: titlePattern, isPublished: true }).select('_id title').lean(),
      scope === 'course' ? Promise.resolve([]) : this.lessonModel.find({ name: titlePattern }).select('_id name type module').lean(),
    ]);

    const lessonModuleIds = lessonTitleMatches.map((lesson) => lesson.module);
    const lessonModules = lessonModuleIds.length ? await this.moduleModel.find({ _id: { $in: lessonModuleIds } }).select('_id course').lean() : [];
    const modulesById = new Map(lessonModules.map((module) => [module._id.toString(), module]));

    const matchesByCourse = new Map<string, any[]>();
    const addMatch = (courseId: mongoose.Types.ObjectId | string, match: any) => {
      const key = courseId.toString();
      const matches = matchesByCourse.get(key) || [];
      matches.push(match);
      matchesByCourse.set(key, matches);
    };

    for (const course of courseTitleMatches) {
      addMatch(course._id, {
        type: 'course',
        field: 'title',
        id: course._id,
        title: course.title,
      });
    }

    for (const lesson of lessonTitleMatches) {
      const module = modulesById.get(lesson.module.toString());
      if (!module) continue;

      addMatch(module.course as any, {
        type: 'lesson',
        lessonType: lesson.type,
        field: 'name',
        id: lesson._id,
        title: lesson.name,
      });
    }

    const courseIds = [...matchesByCourse.keys()];
    if (!courseIds.length) {
      return {
        meta: { current: currentPage, pageSize, pages: 0, total: 0 },
        result: [],
      };
    }

    const filter = { _id: { $in: courseIds }, isPublished: true };
    const totalItems = await this.courseModel.countDocuments(filter);
    
    const courses = await this.courseModel.find(filter)
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)
      .sort({ updatedAt: -1 })
      .populate([
        { path: 'category', select: 'name slug' },
        { path: 'authors', select: '_id name avatar' },
      ])
      .lean();

    return {
      meta: {
        current: currentPage,
        pageSize,
        pages: Math.ceil(totalItems / pageSize),
        total: totalItems,
      },
      result: courses.map((course) => ({
        ...course,
        matches: matchesByCourse.get(course._id.toString()) || [],
      })),
    };
  }

  private escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  async findOne(courseIdOrSlug: string): Promise<any> {
    const course = await this.courseModel.findOne({
      ...this.getCourseLookupQuery(courseIdOrSlug),
      isPublished: true,
    })
      .populate([
        { path: 'category', select: '_id name slug' }, 
        { path: 'authors', select: '_id name avatar' },
      ])
      .lean();
    if (!course) throw new BadRequestException(`course with id or slug=${courseIdOrSlug} not found`);

    const modules = await this.courseContentService.getCourseOutline(course._id.toString(), 'public');

    return {
      ...course,
      modules,
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

    const modules = await this.courseContentService.getCourseOutline(course._id.toString(), 'manage');

    return {
      ...course,
      modules,
    };
  }

  async update(id: string, updateCourseDto: UpdateCourseDto, user: IUser) {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`course with id=${id} not found`);

    const course = await this.courseModel.findById(id);
    if(!course) throw new BadRequestException(`course with id=${id} not found`);

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
    if(!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`course with id=${id} not found`);

    const course = await this.courseModel.findById(id);
    if(!course) throw new BadRequestException(`course with id=${id} not found`);

    const enrolledCount = await this.enrolmentModel.countDocuments({
      course: id,
      isDeleted: { $ne: true },
    });

    if (enrolledCount > 0) {
      throw new BadRequestException('Cannot delete course with enrollments. Please unpublish it instead.');
    }

    const modules = await this.moduleModel.find({ course: id }).select({ _id: 1 });
    const moduleIds = modules.map((m) => m._id);

    if (moduleIds.length) {
      await this.lessonModel.updateMany(
        { module: { $in: moduleIds } },
        {
          deletedBy: {
            _id: user._id,
            email: user.email,
          },
        },
      );
      await this.lessonModel.softDelete({ module: { $in: moduleIds } });
    }

    await this.moduleModel.updateMany(
      { course: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    await this.moduleModel.softDelete({ course: id });

    await this.courseModel.updateOne(
      {_id: id}, {
      isPublished: false,
      deletedBy: {
        _id: user._id,
        email: user.email
      }
    });
    
    return this.courseModel.softDelete({_id: id});
  }
}
