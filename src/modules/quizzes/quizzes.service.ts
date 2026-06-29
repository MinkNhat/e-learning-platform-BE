import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { QuestionType, QuizAttemptStatus } from 'src/core/enums/quiz.enum';
import { Enrolment, EnrolmentDocument } from '../enrollments/schemas/enrolment.schema';
import { Module, ModuleDocument } from '../modules/schemas/module.schema';
import { Lesson, LessonDocument } from '../lessons/schemas/lesson.schema';
import { IUser } from '../users/users.interface';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SaveQuizAnswerDto } from './dto/save-quiz-answer.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Question, QuestionDocument } from './schemas/question.schema';
import { QuizAnswer, QuizAnswerDocument } from './schemas/quiz-answer.schema';
import { QuizAttempt, QuizAttemptDocument } from './schemas/quiz-attempt.schema';
import { Quiz, QuizDocument } from './schemas/quiz.schema';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectModel(Quiz.name) private quizModel: SoftDeleteModel<QuizDocument>,
    @InjectModel(Question.name) private questionModel: SoftDeleteModel<QuestionDocument>,
    @InjectModel(QuizAttempt.name) private attemptModel: SoftDeleteModel<QuizAttemptDocument>,
    @InjectModel(QuizAnswer.name) private answerModel: SoftDeleteModel<QuizAnswerDocument>,
    @InjectModel(Module.name) private moduleModel: SoftDeleteModel<ModuleDocument>,
    @InjectModel(Lesson.name) private lessonModel: SoftDeleteModel<LessonDocument>,
    @InjectModel(Enrolment.name) private enrolmentModel: SoftDeleteModel<EnrolmentDocument>,
  ) {}

  private async getQuiz(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException('Quiz not found');

    const quiz = await this.quizModel.findById(id);
    if (!quiz) throw new BadRequestException('Quiz not found');

    return quiz;
  }

  private validateQuestion(dto: CreateQuestionDto | UpdateQuestionDto, existing?: Question) {
    const type = dto.type ?? existing?.type;
    const options = dto.options ?? existing?.options ?? [];
    const answers = dto.acceptedAnswers ?? existing?.acceptedAnswers ?? [];

    if (type === QuestionType.FILL_BLANK) {
      if (!answers.length) throw new BadRequestException('Fill blank questions require at least one accepted answer');
      return;
    }

    if (options.length < 2) throw new BadRequestException('Choice questions require at least two options');

    const correct = options.filter((option) => option.isCorrect).length;
    if (type === QuestionType.SINGLE_CHOICE || type === QuestionType.TRUE_FALSE) {
      if (correct !== 1) throw new BadRequestException('Single choice and true/false questions require exactly one correct option');
    } else if (type === QuestionType.MULTI_CHOICE && correct < 1) {
      throw new BadRequestException('Multi choice questions require at least one correct option');
    }

    if (type === QuestionType.TRUE_FALSE && options.length !== 2) throw new BadRequestException('True/false questions require exactly two options');
  }

  // hide sensitive data when return quiz and question to learners
  private sanitizeQuestion(question: any) {
    const value = question.toObject ? question.toObject() : question;

    return { 
      ...value, 
      options: (value.options || []).map(({ isCorrect, ...option }) => option), 
      acceptedAnswers: undefined 
    };
  }

  async findOne(id: string) {
    const quiz = await this.getQuiz(id);
    const questions = await this.questionModel.find({ quiz: id }).sort({ order: 1 }).lean();

    return { 
      ...this.sanitizeQuestion(quiz), 
      questions: questions.map((question) => this.sanitizeQuestion(question)) 
    };
  }

  async findOneForManage(id: string) {
    const quiz = await this.getQuiz(id);
    const questions = await this.questionModel.find({ quiz: id }).sort({ order: 1 }).lean();

    return { 
      ...(quiz.toObject()), 
      questions 
    };
  }

  async create(dto: CreateQuizDto, user: IUser) {
    const module = await this.moduleModel.findById(dto.module);
    if (!module) throw new BadRequestException('Module not found');

    // check duplicate order in module (for quiz and lesson)
    const duplicate = await this.quizModel.exists({ module: dto.module, order: dto.order }) || await this.lessonModel.exists({ module: dto.module, order: dto.order });
    if (duplicate) throw new BadRequestException('A quiz already exists at this order in the module');

    const quiz = await this.quizModel.create({ ...dto, createdBy: { _id: user._id, email: user.email } });
    return { 
      _id: quiz._id, 
      title: quiz.title, 
      createdAt: (quiz as any).createdAt 
    };
  }

  async update(id: string, dto: UpdateQuizDto, user: IUser) {
    const quiz = await this.getQuiz(id);
    
    const updatePayload = { ...dto };
    delete updatePayload.module;

    const moduleId = quiz.module;
    const order = updatePayload.order ?? quiz.order;

    const duplicate = await this.quizModel.exists({ _id: { $ne: id }, module: moduleId, order }) || await this.lessonModel.exists({ module: moduleId, order });
    if (duplicate) throw new BadRequestException('A quiz already exists at this order in the module');

    return this.quizModel.updateOne({ _id: id }, { ...updatePayload, updatedBy: { _id: user._id, email: user.email } });
  }

  async remove(id: string, user: IUser) {
    await this.getQuiz(id);
    await this.quizModel.updateOne({ _id: id }, { deletedBy: { _id: user._id, email: user.email } });
    await this.questionModel.softDelete({ quiz: id });
    return this.quizModel.softDelete({ _id: id });
  }

  
  // QUESTIONS

  async createQuestion(dto: CreateQuestionDto) {
    await this.getQuiz(dto.quiz.toString());
    this.validateQuestion(dto);

    const question = await this.questionModel.create({ 
      ...dto, options: dto.options || [], 
      acceptedAnswers: dto.acceptedAnswers || [] 
    });

    return { _id: question._id, content: question.content };
  }

  async updateQuestion(id: string, dto: UpdateQuestionDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException('Question not found');

    const question = await this.questionModel.findById(id);
    if (!question) throw new BadRequestException('Question not found');

    if (dto.quiz && dto.quiz.toString() !== question.quiz.toString()) await this.getQuiz(dto.quiz.toString());

    this.validateQuestion(dto, question);
    return this.questionModel.updateOne({ _id: id }, dto);
  }

  async removeQuestion(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException('Question not found');
    return this.questionModel.softDelete({ _id: id });
  }

  // QUIZ ATTEMPTS

  private async assertQuizEnrollment(quiz: Quiz, userId: string) {
    const module = await this.moduleModel.findById(quiz.module).select('course').lean();
    if (!module) throw new BadRequestException('Quiz module not found');

    const enrolled = await this.enrolmentModel.exists({ user: userId, course: module.course, isActive: true });
    if (!enrolled) throw new ForbiddenException('You must be enrolled to take this quiz');
  }

  private assertAttemptOpen(attempt: QuizAttempt, quiz: Quiz) {
    if (attempt.status !== QuizAttemptStatus.IN_PROGRESS) throw new BadRequestException('Quiz attempt is closed');

    if (quiz.timeLimitSeconds && Date.now() > new Date(attempt.startedAt).getTime() + quiz.timeLimitSeconds * 1000) {
      throw new BadRequestException('Quiz attempt has expired');
    }
  }

  async startAttempt(quizId: string, user: IUser): Promise<any> {
    const quiz = await this.getQuiz(quizId);
    if (!quiz.isActive) throw new BadRequestException('Quiz is inactive');

    await this.assertQuizEnrollment(quiz, user._id);

    const existing = await this.attemptModel.findOne({ quiz: quizId, user: user._id, status: QuizAttemptStatus.IN_PROGRESS });
    if (existing) return this.getAttempt(existing._id.toString(), user);

    const previous = await this.attemptModel.countDocuments({ quiz: quizId, user: user._id });
    if (quiz.maxAttempts && previous >= quiz.maxAttempts) throw new BadRequestException('Maximum number of attempts reached');

    const questions = await this.questionModel.find({ quiz: quizId }).sort({ order: 1 }).lean();
    const attempt = await this.attemptModel.create({
      quiz: quizId, user: user._id, attemptNumber: previous + 1,
      quizSnapshot: { title: quiz.title, passingScore: quiz.passingScore, questions },
    });

    return this.getAttempt(attempt._id.toString(), user);
  }

  async saveAnswer(attemptId: string, questionId: string, dto: SaveQuizAnswerDto, user: IUser) {
    const attempt = await this.attemptModel.findById(attemptId).populate('quiz');
    if (!attempt || attempt.user.toString() !== user._id) throw new ForbiddenException('Quiz attempt not found');

    const quiz: any = attempt.quiz;
    this.assertAttemptOpen(attempt, quiz);

    const question = await this.questionModel.findOne({ _id: questionId, quiz: quiz._id });
    if (!question) throw new BadRequestException('Question not found in quiz');
    if (question.type === QuestionType.FILL_BLANK && !dto.textAnswer?.trim()) throw new BadRequestException('A text answer is required');
    if (question.type !== QuestionType.FILL_BLANK && !dto.selectedOptionIds?.length) throw new BadRequestException('At least one option is required');

    return this.answerModel.findOneAndUpdate({ attempt: attemptId, question: questionId }, { ...dto, attempt: attemptId, question: questionId }, { upsert: true, new: true });
  }

  private grade(question: any, answer: any) {
    if (!answer) return { isCorrect: false, earnedPoints: 0 };

    if (question.type === QuestionType.FILL_BLANK) {
      const normalize = (value: string) => (question.caseSensitive ? value : value.toLowerCase()).trim().replace(/\s+/g, ' ');
      const isCorrect = question.acceptedAnswers.some((item) => normalize(item) === normalize(answer.textAnswer || ''));
      return { isCorrect, earnedPoints: isCorrect ? question.points : 0 };
    }

    const expected = question.options.filter((option) => option.isCorrect).map((option) => option._id.toString()).sort();
    const selected = (answer.selectedOptionIds || []).map((id) => id.toString()).sort();
    const isCorrect = expected.length === selected.length && expected.every((id, index) => id === selected[index]);

    return { isCorrect, earnedPoints: isCorrect ? question.points : 0 };
  }

  async submitAttempt(id: string, user: IUser): Promise<any> {
    const attempt = await this.attemptModel.findById(id).populate('quiz');
    if (!attempt || attempt.user.toString() !== user._id) throw new ForbiddenException('Quiz attempt not found');

    const quiz: any = attempt.quiz;
    this.assertAttemptOpen(attempt, quiz);

    const questions = await this.questionModel.find({ quiz: quiz._id }).lean();
    const answers = await this.answerModel.find({ attempt: id });
    const answersByQuestion = new Map(answers.map((answer) => [answer.question.toString(), answer]));
    let score = 0;

    await Promise.all(questions.map(async (question) => {
      const grade = this.grade(question, answersByQuestion.get(question._id.toString()));
      score += grade.earnedPoints;
      if (answersByQuestion.has(question._id.toString())) await this.answerModel.updateOne({ attempt: id, question: question._id }, grade);
    }));

    const maxScore = questions.reduce((sum, question) => sum + question.points, 0);
    const percentage = maxScore ? Math.round((score / maxScore) * 10000) / 100 : 0;

    await this.attemptModel.updateOne({ _id: id, status: QuizAttemptStatus.IN_PROGRESS }, { status: QuizAttemptStatus.SUBMITTED, submittedAt: new Date(), score, maxScore, percentage, passed: percentage >= quiz.passingScore });
    return this.getAttempt(id, user);
  }

  async getAttempt(id: string, user: IUser): Promise<any> {
    const attempt = await this.attemptModel.findById(id).populate('quiz');
    if (!attempt || attempt.user.toString() !== user._id) throw new ForbiddenException('Quiz attempt not found');

    const quiz: any = attempt.quiz;
    const questions = await this.questionModel.find({ quiz: quiz._id }).sort({ order: 1 }).lean();
    const answers = await this.answerModel.find({ attempt: id }).lean();
    const canShowResult = attempt.status !== QuizAttemptStatus.IN_PROGRESS && quiz.showResultAfterSubmit;
    
    return { attempt, quiz: this.sanitizeQuestion(quiz), questions: questions.map((question) => canShowResult ? question : this.sanitizeQuestion(question)), answers: canShowResult ? answers : answers.map(({ isCorrect, earnedPoints, ...answer }) => answer) };
  }

  async findMyAttempts(quizId: string, user: IUser) {
    return this.attemptModel.find({ quiz: quizId, user: user._id }).sort({ createdAt: -1 }).select('-quizSnapshot').lean();
  }
}
