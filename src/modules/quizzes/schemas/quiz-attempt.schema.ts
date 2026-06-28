import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { QuizAttemptStatus } from 'src/core/enums/quiz.enum';
import { User } from 'src/modules/users/schemas/user.schema';
import { Quiz } from './quiz.schema';

export type QuizAttemptDocument = HydratedDocument<QuizAttempt>;

@Schema({ timestamps: true })
export class QuizAttempt {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Quiz.name, required: true })
  quiz: Quiz;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  user: User;

  @Prop({ required: true })
  attemptNumber: number;

  @Prop({ enum: QuizAttemptStatus, default: QuizAttemptStatus.IN_PROGRESS })
  status: QuizAttemptStatus;

  @Prop({ default: Date.now })
  startedAt: Date;

  @Prop()
  submittedAt?: Date;

  @Prop({ default: 0 })
  score: number;

  @Prop({ default: 0 })
  maxScore: number;

  @Prop({ default: 0 })
  percentage: number;

  @Prop({ default: false })
  passed: boolean;

  @Prop({ type: Object })
  quizSnapshot: Record<string, any>;
}

export const QuizAttemptSchema = SchemaFactory.createForClass(QuizAttempt);
QuizAttemptSchema.index({ quiz: 1, user: 1, attemptNumber: 1 }, { unique: true });
QuizAttemptSchema.index({ quiz: 1, user: 1, status: 1 });
