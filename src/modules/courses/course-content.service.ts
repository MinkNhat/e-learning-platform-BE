import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, LessonDocument } from '../lessons/schemas/lesson.schema';
import { Module as CourseModule, ModuleDocument } from '../modules/schemas/module.schema';
import { Quiz, QuizDocument } from '../quizzes/schemas/quiz.schema';

type CourseOutlineMode = 'public' | 'learn' | 'manage';

@Injectable()
export class CourseContentService {
  constructor(
    @InjectModel(CourseModule.name) private moduleModel: Model<ModuleDocument>,
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
    @InjectModel(Quiz.name) private quizModel: Model<QuizDocument>,
  ) {}

  private mapLesson(lesson: any, mode: CourseOutlineMode) {
    const base = {
      _id: lesson._id,
      name: lesson.name,
      type: 'lesson',
      lessonType: lesson.type,
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

  private mapQuiz(quiz: any, mode: CourseOutlineMode) {
    const base = {
      _id: quiz._id,
      type: 'quiz',
      title: quiz.title,
      description: quiz.description,
      order: quiz.order,
      isActive: quiz.isActive,
      isFree: quiz.isFree,
      module: quiz.module,
    };
    if (mode !== 'manage') return base;
    return {
      ...base,
      timeLimitSeconds: quiz.timeLimitSeconds,
      passingScore: quiz.passingScore,
      maxAttempts: quiz.maxAttempts,
      shuffleQuestions: quiz.shuffleQuestions,
      shuffleOptions: quiz.shuffleOptions,
      showResultAfterSubmit: quiz.showResultAfterSubmit,
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

    const [lessons, quizzes] = await Promise.all([
      this.lessonModel.find({ module: { $in: moduleIds } }).select(lessonSelect).sort({ order: 1 }).lean(),
      this.quizModel.find({ module: { $in: moduleIds } }).select(
        mode === 'manage'
          ? { _id: 1, title: 1, description: 1, order: 1, module: 1, isActive: 1, isFree: 1, timeLimitSeconds: 1, passingScore: 1, maxAttempts: 1, shuffleQuestions: 1, shuffleOptions: 1, showResultAfterSubmit: 1 }
          : { _id: 1, title: 1, description: 1, order: 1, module: 1, isActive: 1, isFree: 1 },
      ).sort({ order: 1 }).lean(),
    ]);

    const itemsMap = new Map<string, any[]>();
    for (const lesson of lessons) {
      const key = lesson.module.toString();
      if (!itemsMap.has(key)) itemsMap.set(key, []);
      itemsMap.get(key)!.push(this.mapLesson(lesson, mode));
    }
    for (const quiz of quizzes) {
      const key = quiz.module.toString();
      if (!itemsMap.has(key)) itemsMap.set(key, []);
      itemsMap.get(key)!.push(this.mapQuiz(quiz, mode));
    }

    return modules.map((module) => ({
      ...module,
      items: (itemsMap.get(module._id.toString()) || []).sort((a, b) => a.order - b.order),
    }));
  }
}
