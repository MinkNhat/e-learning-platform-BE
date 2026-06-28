import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Question } from './question.schema';
import { QuizAttempt } from './quiz-attempt.schema';

export type QuizAnswerDocument = HydratedDocument<QuizAnswer>;

@Schema({ timestamps: true })
export class QuizAnswer {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: QuizAttempt.name, required: true })
  attempt: QuizAttempt;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Question.name, required: true })
  question: Question;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], default: [] })
  selectedOptionIds: mongoose.Types.ObjectId[];

  @Prop()
  textAnswer?: string;

  @Prop({ default: false })
  isCorrect: boolean;

  @Prop({ default: 0 })
  earnedPoints: number;
}

export const QuizAnswerSchema = SchemaFactory.createForClass(QuizAnswer);
QuizAnswerSchema.index({ attempt: 1, question: 1 }, { unique: true });
