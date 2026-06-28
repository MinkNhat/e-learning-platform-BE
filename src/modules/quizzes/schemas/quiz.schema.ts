import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Module } from 'src/modules/modules/schemas/module.schema';

export type QuizDocument = HydratedDocument<Quiz>;

@Schema({ timestamps: true })
export class Quiz {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Module.name, required: true })
  module: Module;

  @Prop({ required: true, min: 1 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isFree: boolean;

  @Prop({ default: null, min: 1 })
  timeLimitSeconds?: number;

  @Prop({ default: 70, min: 0, max: 100 })
  passingScore: number;

  @Prop({ default: null, min: 1 })
  maxAttempts?: number;

  @Prop({ default: false })
  shuffleQuestions: boolean;

  @Prop({ default: false })
  shuffleOptions: boolean;

  @Prop({ default: true })
  showResultAfterSubmit: boolean;

  @Prop({ type: Object })
  createdBy: { _id: mongoose.Schema.Types.ObjectId; email: string };

  @Prop({ type: Object })
  updatedBy: { _id: mongoose.Schema.Types.ObjectId; email: string };

  @Prop({ type: Object })
  deletedBy: { _id: mongoose.Schema.Types.ObjectId; email: string };

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
QuizSchema.index({ module: 1, order: 1 }, { unique: true });
