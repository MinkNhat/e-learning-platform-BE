import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { QuestionType } from 'src/core/enums/quiz.enum';
import { Quiz } from './quiz.schema';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({ _id: true })
export class QuestionOption {
  @Prop({ required: true })
  content: string;

  @Prop({ default: false })
  isCorrect: boolean;

  @Prop({ required: true })
  order: number;
}

export const QuestionOptionSchema = SchemaFactory.createForClass(QuestionOption);

@Schema({ timestamps: true })
export class Question {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Quiz.name, required: true })
  quiz: Quiz;

  @Prop({ enum: QuestionType, required: true })
  type: QuestionType;

  @Prop({ required: true })
  content: string;

  @Prop()
  explanation?: string;

  @Prop({ default: 1, min: 0 })
  points: number;

  @Prop({ required: true, min: 1 })
  order: number;

  @Prop({ type: [QuestionOptionSchema], default: [] })
  options: QuestionOption[];

  @Prop({ type: [String], default: [] })
  acceptedAnswers: string[];

  @Prop({ default: false })
  caseSensitive: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
QuestionSchema.index({ quiz: 1, order: 1 }, { unique: true });
