import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from 'src/modules/courses/schemas/course.schema';
import { Lesson } from 'src/modules/lessons/schemas/lesson.schema';
import { Module } from 'src/modules/modules/schemas/module.schema';
import { User } from 'src/modules/users/schemas/user.schema';

export type LessonProgressDocument = HydratedDocument<LessonProgress>;

@Schema({ timestamps: true })
export class LessonProgress {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Course.name, required: true })
  course: Course;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Module.name, required: true })
  module: Module;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Lesson.name, required: true })
  lesson: Lesson;

  @Prop({ default: 'not_started' })
  status: 'not_started' | 'in_progress' | 'completed';

  @Prop()
  completedAt: Date;

  @Prop()
  lastAccessedAt: Date;
}

export const LessonProgressSchema = SchemaFactory.createForClass(LessonProgress);
LessonProgressSchema.index({ user: 1, lesson: 1 }, { unique: true });
LessonProgressSchema.index({ user: 1, course: 1, status: 1 });
