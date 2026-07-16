import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { IUser } from '../users/users.interface';
import { Enrolment, EnrolmentDocument } from '../enrollments/schemas/enrolment.schema';
import aqp from 'api-query-params';
import { Course, CourseDocument } from '../courses/schemas/course.schema';
import { Lesson, LessonDocument } from '../lessons/schemas/lesson.schema';
import { CourseContentService } from '../courses/course-content.service';
import { LessonProgress, LessonProgressDocument } from './schemas/lesson-progress.schema';
import { User, UserDocument } from '../users/schemas/user.schema';
import { SocialProvider } from 'src/core/enums/social-provider.enum';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class MeService {
  constructor(
    @InjectModel(Enrolment.name) private enrolmentModel: Model<EnrolmentDocument>,
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
    @InjectModel(LessonProgress.name) private lessonProgressModel: Model<LessonProgressDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private courseContentService: CourseContentService,
  ) {}

  private getCourseLookupQuery(courseIdOrSlug: string) {
    if (mongoose.Types.ObjectId.isValid(courseIdOrSlug)) {
      return { $or: [{ _id: courseIdOrSlug }, { slug: courseIdOrSlug }] };
    }

    return { slug: courseIdOrSlug };
  }

  private getHashPassword(password: string) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }

  private isValidPassword(password: string, hash: string) {
    if (!hash) return false;
    return compareSync(password, hash);
  }

  private async findMyAccount(userId: string) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new BadRequestException(`User with id='${userId}' not found`);
    }

    return await this.userModel.findOne({ _id: userId })
      .select(['-password', '-refreshToken', '-__v'])
      .populate({ path: 'role', select: { _id: 1, name: 1 } });
  }

  async updateMyAvatar(user: IUser, avatar?: Express.Multer.File) {
    if (!avatar?.filename) {
      throw new BadRequestException('Avatar file is required');
    }

    await this.userModel.updateOne(
      { _id: user._id },
      {
        avatar: avatar.filename,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    );

    return await this.findMyAccount(user._id);
  }

  async changeMyPassword(user: IUser, changePasswordDto: ChangePasswordDto) {
    const foundUser = await this.userModel.findById(user._id);

    if (!foundUser) {
      throw new BadRequestException(`User with id='${user._id}' not found`);
    }

    if (!foundUser.password || (foundUser.authProvider && foundUser.authProvider !== SocialProvider.LOCAL)) {
      throw new BadRequestException('Tài khoản đăng nhập mạng xã hội không thể đổi mật khẩu tại đây');
    }

    const isCurrentPasswordValid = this.isValidPassword(changePasswordDto.currentPassword, foundUser.password);
    if (!isCurrentPasswordValid) {
      throw new BadRequestException('Mật khẩu hiện tại không chính xác');
    }

    if (this.isValidPassword(changePasswordDto.newPassword, foundUser.password)) {
      throw new BadRequestException('Mật khẩu mới không được trùng với mật khẩu hiện tại');
    }

    await this.userModel.updateOne(
      { _id: user._id },
      {
        password: this.getHashPassword(changePasswordDto.newPassword),
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    );

    return await this.findMyAccount(user._id);
  }

  async findMyCourses(currentPage: number, limit: number, qs: string, user: IUser) {
    const { filter, sort, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    // prevent view other user courses
    delete filter.user;
    const finalFilter = {
      ...filter,
      user: user._id,
      isActive: true,
    };
    
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;
    const finalSort = sort || { enrolDate: -1, createdAt: -1 };

    const totalItems = await this.enrolmentModel.countDocuments(finalFilter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.enrolmentModel
      .find(finalFilter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(finalSort as any)
      .populate(
        [{
          path: 'course',
          select: '_id title slug shortDescription thumbnail level rating price totalLessons totalLength enrollmentCount',
          populate: [
            { path: 'category', select: '_id name slug' },
            { path: 'authors', select: '_id name avatar' },
          ],
          },
          {
            path: 'lastLesson',
            select: '_id name',
          }
        ])
      .select(projection || '_id course enrolDate completedDate progress completedLessonsCount totalLessonsSnapshot lastLesson lastAccessedAt')
      .lean();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }

  private async assertEnrolled(userId: string, courseIdOrSlug: string) {
    if (!courseIdOrSlug) {
      throw new BadRequestException('Course is required');
    }

    const course = await this.courseModel.findOne(this.getCourseLookupQuery(courseIdOrSlug)).lean();
    if (!course) {
      throw new BadRequestException(`Course with id='${courseIdOrSlug}' not found`);
    }

    const enrollment = await this.enrolmentModel.findOne({
      user: userId,
      course: course._id,
      isActive: true,
    }).lean();

    if (!enrollment) {
      throw new ForbiddenException('You are not enrolled in this course');
    }

    return { course, enrollment };
  }

  private decorateModulesWithProgress(modules: any[], progressList: any[]) {
    const progressMap = new Map(progressList.map((item) => [item.lesson.toString(), item]));
    return modules.map((module) => ({
      ...module,
      items: (module.items || []).map((item) => {
        if (item.type !== 'lesson') return item;
        const progress = progressMap.get(item._id.toString());
        return { ...item, progressStatus: progress?.status || 'not_started', completedAt: progress?.completedAt, lastAccessedAt: progress?.lastAccessedAt };
      }),
    }));
  }

  private async syncEnrollmentProgress(userId: string, courseId: string, totalLessons: number, lastLessonId?: string) {
    const completedLessonsCount = await this.lessonProgressModel.countDocuments({
      user: userId,
      course: courseId,
      status: 'completed',
    });
    const progress = totalLessons > 0
      ? Math.min(Math.round((completedLessonsCount / totalLessons) * 100), 100)
      : 0;
    const now = new Date();

    await this.enrolmentModel.updateOne(
      { user: userId, course: courseId, isActive: true },
      {
        progress,
        completedLessonsCount,
        totalLessonsSnapshot: totalLessons,
        ...(lastLessonId ? { lastLesson: lastLessonId } : {}),
        lastAccessedAt: now,
        completedDate: progress >= 100 ? now : null,
      },
    );

    return { progress, completedLessonsCount, totalLessons };
  }

  private async touchLessonProgress(userId: string, courseId: string, moduleId: string, lessonId: string) {
    const now = new Date();
    const progress = await this.lessonProgressModel.findOneAndUpdate(
      { user: userId, lesson: lessonId },
      {
        $setOnInsert: {
          user: userId,
          course: courseId,
          module: moduleId,
          lesson: lessonId,
          status: 'in_progress',
        },
        $set: {
          lastAccessedAt: now,
        },
      },
      { upsert: true, new: true },
    ).lean();

    return progress;
  }

  private buildProgressSummary(courseStats: any, lessonProgress?: any) {
    return {
      coursePercent: courseStats.progress,
      completedLessonsCount: courseStats.completedLessonsCount,
      totalLessons: courseStats.totalLessons,
      currentLessonStatus: lessonProgress?.status || 'not_started',
    };
  }

  async findMyRecentLesson(courseSlug: string, user: IUser) {
    const { course, enrollment } = await this.assertEnrolled(user._id, courseSlug);
    if (enrollment.lastLesson) {
      const lastLesson = await this.lessonModel.findById(enrollment.lastLesson)
        .select({ _id: 1, name: 1, type: 1, order: 1, module: 1, isActive: 1, isFree: 1, metadata: 1 })
        .lean();
      if (lastLesson) return lastLesson;
    }

    const modules = await this.courseContentService.getCourseOutline(course._id.toString(), 'learn');
    const firstLesson = modules.flatMap((module) => module.items || []).find((item) => item.type === 'lesson');

    if (firstLesson) {
      return firstLesson;
    }

    throw new BadRequestException(`Course with slug='${courseSlug}' has no lessons`);
  }

  async findMyLesson(courseSlug: string, lessonId: string, user: IUser): Promise<any> {
    if (!mongoose.Types.ObjectId.isValid(lessonId)) {
      throw new BadRequestException(`Lesson with id='${lessonId}' not found`);
    }

    const { course } = await this.assertEnrolled(user._id, courseSlug);
    const lesson = await this.lessonModel.findById(lessonId).lean();
    if (!lesson) throw new BadRequestException(`Lesson with id='${lessonId}' not found`);

    const modules = await this.courseContentService.getCourseOutline(course._id.toString(), 'learn');
    const currentModule = modules.find((module) => module._id.toString() === lesson.module.toString());

    if (!currentModule) {
      throw new BadRequestException(`Lesson with id='${lessonId}' not found in course='${courseSlug}'`);
    }

    const allLessons = modules.flatMap((module) => module.items || []).filter((item) => item.type === 'lesson');
    const lessonProgress = await this.touchLessonProgress(
      user._id,
      course._id.toString(),
      currentModule._id.toString(),
      lesson._id.toString(),
    );
    const progressList = await this.lessonProgressModel.find({ user: user._id, course: course._id.toString() }).lean();
    const decoratedModules = this.decorateModulesWithProgress(modules, progressList);
    const courseStats = await this.syncEnrollmentProgress(user._id, course._id.toString(), allLessons.length, lesson._id.toString());

    return {
      lesson,
      currentModule,
      course: {
        _id: course._id,
        title: course.title,
        slug: course.slug,
        thumbnail: course.thumbnail,
        totalLessons: course.totalLessons,
        totalLength: course.totalLength,
      },
      modules: decoratedModules,
      progress: this.buildProgressSummary(courseStats, lessonProgress),
    };
  }

  async completeLesson(courseSlug: string, lessonId: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(lessonId)) {
      throw new BadRequestException(`Lesson with id='${lessonId}' not found`);
    }

    const { course } = await this.assertEnrolled(user._id, courseSlug);
    const lesson = await this.lessonModel.findById(lessonId).lean();
    if (!lesson) throw new BadRequestException(`Lesson with id='${lessonId}' not found`);

    const modules = await this.courseContentService.getCourseOutline(course._id.toString(), 'learn');
    const currentModule = modules.find((module) => module._id.toString() === lesson.module.toString());
    if (!currentModule) {
      throw new BadRequestException(`Lesson with id='${lessonId}' not found in course='${courseSlug}'`);
    }

    const now = new Date();
    const lessonProgress = await this.lessonProgressModel.findOneAndUpdate(
      { user: user._id, lesson: lessonId },
      {
        user: user._id,
        course: course._id,
        module: currentModule._id,
        lesson: lessonId,
        status: 'completed',
        lastAccessedAt: now,
        completedAt: now,
      },
      { upsert: true, new: true },
    ).lean();
    const allLessons = modules.flatMap((module) => module.items || []).filter((item) => item.type === 'lesson');
    const courseStats = await this.syncEnrollmentProgress(user._id, course._id.toString(), allLessons.length, lessonId);

    return this.buildProgressSummary(courseStats, lessonProgress);
  }
}
