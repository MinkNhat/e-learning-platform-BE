import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, LessonDocument } from '../lessons/schemas/lesson.schema';
import { Module as CourseModule, ModuleDocument } from '../modules/schemas/module.schema';

type CourseOutlineMode = 'public' | 'learn' | 'manage';

@Injectable()
export class CourseContentService {
  constructor(
    @InjectModel(CourseModule.name) private moduleModel: Model<ModuleDocument>,
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  private mapLesson(lesson: any, mode: CourseOutlineMode) {
    const base = {
      _id: lesson._id,
      name: lesson.name,
      type: lesson.type,
      order: lesson.order,
      isActive: lesson.isActive,
      isFree: lesson.isFree,
      module: lesson.module,
      metadata:
        mode === 'manage'
          ? lesson.metadata
          : {
              duration: lesson.metadata?.duration,
              durationString: lesson.metadata?.durationString,
            },
    };

    if (mode !== 'manage') return base;

    return {
      ...base,
      content: lesson.content,
    };
  }

  async getCourseOutline(courseId: string, mode: CourseOutlineMode = 'public'): Promise<any[]> {
    const moduleSelect =
      mode === 'manage'
        ? { _id: 1, name: 1, description: 1, order: 1, isActive: 1, totalLessons: 1, totalLength: 1 }
        : { _id: 1, name: 1, description: 1, order: 1, totalLessons: 1, totalLength: 1 };
    const lessonSelect =
      mode === 'manage'
        ? { _id: 1, name: 1, type: 1, order: 1, module: 1, content: 1, isActive: 1, isFree: 1, metadata: 1 }
        : { _id: 1, name: 1, type: 1, order: 1, module: 1, isActive: 1, isFree: 1, metadata: 1 };

    const modules = await this.moduleModel.find({ course: courseId }).select(moduleSelect).sort({ order: 1 }).lean();
    const moduleIds = modules.map((module) => module._id);

    const lessons = await this.lessonModel.find({ module: { $in: moduleIds } }).select(lessonSelect).sort({ order: 1 }).lean();

    const lessonsMap = new Map<string, any[]>();
    for (const lesson of lessons) {
      const key = lesson.module.toString();
      if (!lessonsMap.has(key)) lessonsMap.set(key, []);
      lessonsMap.get(key)!.push(this.mapLesson(lesson, mode));
    }

    return modules.map((module) => ({
      ...module,
      lessons: lessonsMap.get(module._id.toString()) || [],
    }));
  }
}
