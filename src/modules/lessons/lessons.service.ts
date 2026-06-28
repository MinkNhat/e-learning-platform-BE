import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson, LessonDocument } from './schemas/lesson.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/modules/users/users.interface';
import mongoose from 'mongoose';
import { Module, ModuleDocument } from '../modules/schemas/module.schema';
import { YtbService } from 'src/utils/ytb.service';
import { LessonType } from 'src/core/enums/lesson-type.enum';
import { estimateReadingMinutes } from 'src/utils/utils';
import { Course, CourseDocument } from '../courses/schemas/course.schema';
import { Quiz, QuizDocument } from '../quizzes/schemas/quiz.schema';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: SoftDeleteModel<LessonDocument>,
    @InjectModel(Module.name) private moduleModel: SoftDeleteModel<ModuleDocument>,
    @InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>,
    @InjectModel(Quiz.name) private quizModel: SoftDeleteModel<QuizDocument>,
    private ytbService: YtbService,
  ) {}

  async create(createLessonDto: CreateLessonDto, user: IUser) {
    const module = await this.moduleModel.findOne({ _id: createLessonDto.module });
    if (!module) throw new BadRequestException(`Module with id='${createLessonDto.module}' not found`);
    if (await this.quizModel.exists({ module: module._id, order: createLessonDto.order })) throw new BadRequestException('A quiz already exists at this order in the module');

    createLessonDto.metadata = createLessonDto.metadata ?? {};

    if (createLessonDto.type === LessonType.VIDEO) {
      const videoInfo = await this.ytbService.getVideoInfo(createLessonDto.metadata.videoUrl);

      createLessonDto.metadata.duration = videoInfo.duration
      createLessonDto.metadata.durationString = videoInfo.durationString
      createLessonDto.metadata.ytbId = videoInfo.videoId;
    } else {
      const readingMinutes = estimateReadingMinutes(createLessonDto.content);
      createLessonDto.metadata.durationString = "~" + readingMinutes + " phút đọc";
      createLessonDto.metadata.duration = readingMinutes * 60;
    }

    const newLesson = await this.lessonModel.create({
      ...createLessonDto,
      module: module._id,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    });

    await this.recalculateModuleStats(module._id);

    return {
      _id: newLesson?._id,
      name: newLesson?.name,
      createdAt: newLesson?.createdAt
    };
  }

  async update(id: string, updateLessonDto: UpdateLessonDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`Lesson with id='${id}' not found`);

    const lesson = await this.lessonModel.findById(id);
    if (!lesson) throw new BadRequestException(`Lesson with id='${id}' not found`);

    const currentModuleId = lesson.module as any;
    const updatePayload = { ...updateLessonDto };
    delete updatePayload.module;

    if (updatePayload.order !== undefined && await this.quizModel.exists({ module: currentModuleId, order: updatePayload.order })) {
      throw new BadRequestException('A quiz already exists at this order in the module');
    }

    const metadata = {
      ...(lesson.metadata ?? {}),
      ...(updatePayload.metadata ?? {}),
    };

    if (updatePayload.type ?? lesson.type === LessonType.VIDEO) {
      const videoInfo = await this.ytbService.getVideoInfo(metadata.videoUrl);

      metadata.duration = videoInfo.duration
      metadata.durationString = videoInfo.durationString
      metadata.ytbId = videoInfo.videoId;
    } else {
      const readingMinutes = estimateReadingMinutes(updatePayload.content ?? lesson.content);
      metadata.durationString = "~" + readingMinutes + " phút đọc";
      metadata.duration = readingMinutes * 60;
    }

    const result = await this.lessonModel.updateOne(
      { _id: id },
      {
        ...updatePayload,
        metadata,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      });

    await this.recalculateModuleStats(currentModuleId);

    return result;
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`Lesson with id='${id}' not found`);

    await this.lessonModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        }
      });
      
    const lesson = await this.lessonModel.findById(id);
    const result = await this.lessonModel.softDelete({_id: id});
    if (lesson) {
      await this.recalculateModuleStats(lesson.module as any);
    }

    return result;
  }

  private async recalculateModuleStats(moduleId: mongoose.Types.ObjectId | string) {
    const moduleObjectId = new mongoose.Types.ObjectId(moduleId.toString());
    const module = await this.moduleModel.findById(moduleObjectId).select({ _id: 1, course: 1 });
    if (!module) return;

    const [moduleStats] = await this.lessonModel.aggregate([
      {
        $match: {
          module: moduleObjectId,
          isDeleted: { $ne: true },
        },
      },
      {
        $group: {
          _id: '$module',
          totalLessons: { $sum: 1 },
          totalLength: { $sum: { $ifNull: ['$metadata.duration', 0] } },
        },
      },
    ]);

    await this.moduleModel.updateOne(
      { _id: moduleObjectId },
      {
        totalLessons: moduleStats?.totalLessons ?? 0,
        totalLength: moduleStats?.totalLength ?? 0,
      },
    );

    await this.recalculateCourseStats(module.course as any);
  }

  private async recalculateCourseStats(courseId: mongoose.Types.ObjectId | string) {
    const courseObjectId = new mongoose.Types.ObjectId(courseId.toString());
    const [courseStats] = await this.moduleModel.aggregate([
      {
        $match: {
          course: courseObjectId,
          isDeleted: { $ne: true },
        },
      },
      {
        $group: {
          _id: '$course',
          totalLessons: { $sum: { $ifNull: ['$totalLessons', 0] } },
          totalLength: { $sum: { $ifNull: ['$totalLength', 0] } },
        },
      },
    ]);

    await this.courseModel.updateOne(
      { _id: courseObjectId },
      {
        totalLessons: courseStats?.totalLessons ?? 0,
        totalLength: courseStats?.totalLength ?? 0,
      },
    );
  }
}
