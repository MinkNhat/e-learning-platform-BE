import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrolment, EnrolmentSchema } from '../enrollments/schemas/enrolment.schema';
import { Module as CourseModule, ModuleSchema } from '../modules/schemas/module.schema';
import { Lesson, LessonSchema } from '../lessons/schemas/lesson.schema';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';
import { Question, QuestionSchema } from './schemas/question.schema';
import { QuizAnswer, QuizAnswerSchema } from './schemas/quiz-answer.schema';
import { QuizAttempt, QuizAttemptSchema } from './schemas/quiz-attempt.schema';
import { Quiz, QuizSchema } from './schemas/quiz.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Quiz.name, schema: QuizSchema }, { name: Question.name, schema: QuestionSchema },
    { name: QuizAttempt.name, schema: QuizAttemptSchema }, { name: QuizAnswer.name, schema: QuizAnswerSchema },
    { name: CourseModule.name, schema: ModuleSchema }, { name: Enrolment.name, schema: EnrolmentSchema },
    { name: Lesson.name, schema: LessonSchema },
  ])],
  controllers: [QuizzesController], 
  providers: [QuizzesService], 
  exports: [QuizzesService],
})
export class QuizzesModule {}
