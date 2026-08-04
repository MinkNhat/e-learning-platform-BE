import {
  BadGatewayException,
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Response } from 'express';
import { Model, Types } from 'mongoose';
import { Course, CourseDocument } from '../courses/schemas/course.schema';
import {
  Enrolment,
  EnrolmentDocument,
} from '../enrollments/schemas/enrolment.schema';
import { Lesson, LessonDocument } from '../lessons/schemas/lesson.schema';
import {
  Module as CourseModule,
  ModuleDocument,
} from '../modules/schemas/module.schema';
import { RagQueryDto } from './dto/rag-query.dto';
import {
  RagConversation,
  RagConversationDocument,
} from './schemas/rag-conversation.schema';
import {
  RagMessage,
  RagMessageDocument,
  RagMessageRole,
} from './schemas/rag-message.schema';

const RAG_ISSUER = 'learning-platform-be';
const RAG_AUDIENCE = 'e-learning-rag';
const HISTORY_LIMIT = 10;
const MAX_ANSWER_LENGTH = 100_000;

type RetrievalScope = {
  allowed_course_ids: string[];
  course_id?: string;
  module_id?: string;
  lesson_id?: string;
};

type HistoryMessage = {
  role: RagMessageRole;
  content: string;
};

@Injectable()
export class RagService {
  private readonly privateKey: string;
  private readonly ragApiUrl: string;
  private readonly streamTimeoutMs: number;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @InjectModel(Course.name)
    private readonly courseModel: Model<CourseDocument>,
    @InjectModel(CourseModule.name)
    private readonly moduleModel: Model<ModuleDocument>,
    @InjectModel(Lesson.name)
    private readonly lessonModel: Model<LessonDocument>,
    @InjectModel(Enrolment.name)
    private readonly enrolmentModel: Model<EnrolmentDocument>,
    @InjectModel(RagConversation.name)
    private readonly conversationModel: Model<RagConversationDocument>,
    @InjectModel(RagMessage.name)
    private readonly messageModel: Model<RagMessageDocument>,
  ) {
    const encodedKey = this.configService.get<string>('RAG_JWT_PRIVATE_KEY');
    const ragApiUrl = this.configService.get<string>('RAG_API_URL');
    if (!encodedKey || !ragApiUrl) {
      throw new Error('RAG_JWT_PRIVATE_KEY and RAG_API_URL are required.');
    }

    this.privateKey = Buffer.from(encodedKey, 'base64').toString('utf8');
    this.ragApiUrl = ragApiUrl.replace(/\/$/, '');
    this.streamTimeoutMs =
      Number(this.configService.get('RAG_STREAM_TIMEOUT_MS')) || 180_000;
  }

  async stream(userId: string, dto: RagQueryDto, res: Response): Promise<void> {
    const query = this.normalizeQuery(dto.q);
    const retrievalScope = await this.resolveScope(userId, dto);
    const conversation = await this.getConversation(userId, dto.conversationId);
    const history = await this.loadHistory(conversation.id);
    const userMessage = await this.messageModel.create({
      conversation: conversation._id,
      role: RagMessageRole.USER,
      content: query,
    });
    await this.conversationModel.updateOne(
      { _id: conversation._id },
      { lastMessageAt: userMessage.createdAt },
    );

    const token = await this.signToken(userId, retrievalScope);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.streamTimeoutMs);
    const abortOnClose = () => {
      if (!res.writableEnded) controller.abort();
    };
    res.once('close', abortOnClose);

    let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
    try {
      const upstream = await fetch(`${this.ragApiUrl}/query/stream`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'text/event-stream',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: query,
          history,
        }),
        signal: controller.signal,
      });

      if (
        !upstream.ok ||
        !upstream.body ||
        !upstream.headers.get('content-type')?.includes('text/event-stream')
      ) {
        throw new BadGatewayException('RAG stream request failed.');
      }

      res.status(200);
      res.set({
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no',
      });
      res.flushHeaders();
      this.writeEvent(res, 'ready', {
        conversationId: conversation.id,
        userMessageId: userMessage.id,
      });

      const decoder = new TextDecoder();
      reader = upstream.body.getReader();
      let buffer = '';
      let answer = '';
      let sources: Record<string, unknown>[] = [];

      while (true) {
        const chunk = await reader.read();
        if (chunk.done) throw new Error('RAG stream ended unexpectedly.');

        buffer = (
          buffer + decoder.decode(chunk.value, { stream: true })
        ).replace(/\r\n/g, '\n');

        let boundary = buffer.indexOf('\n\n');
        while (boundary >= 0) {
          const frame = buffer.slice(0, boundary);
          buffer = buffer.slice(boundary + 2);
          boundary = buffer.indexOf('\n\n');

          const event = this.parseEvent(frame);
          if (!event) continue;

          if (event.name === 'token') {
            const delta = event.data.delta;
            if (typeof delta !== 'string') {
              throw new Error('Invalid token event.');
            }
            answer += delta;
            if (answer.length > MAX_ANSWER_LENGTH) {
              throw new Error('RAG answer is too long.');
            }
            this.writeEvent(res, 'token', { delta });
            continue;
          }

          if (event.name === 'status') {
            const stage = event.data.stage;
            const message = event.data.message;
            if (
              typeof stage !== 'string' ||
              !stage ||
              stage.length > 64 ||
              typeof message !== 'string' ||
              !message ||
              message.length > 200
            ) {
              throw new Error('Invalid status event.');
            }
            this.writeEvent(res, 'status', { stage, message });
            continue;
          }

          if (event.name === 'sources') {
            sources = Array.isArray(event.data.items)
              ? (event.data.items as Record<string, unknown>[])
              : [];
            continue;
          }

          if (event.name === 'error') {
            throw new Error('RAG stream failed.');
          }

          if (event.name === 'done') {
            const assistantMessage = await this.messageModel.create({
              conversation: conversation._id,
              role: RagMessageRole.ASSISTANT,
              content: answer,
              sources,
            });
            await this.conversationModel.updateOne(
              { _id: conversation._id },
              { lastMessageAt: assistantMessage.createdAt },
            );
            this.writeEvent(res, 'done', {
              assistantMessageId: assistantMessage.id,
            });
            res.end();
            return;
          }
        }
      }
    } catch (error) {
      if (!res.headersSent) {
        if (error instanceof BadGatewayException) throw error;
        throw new BadGatewayException('RAG service is unavailable.');
      }
      if (!res.destroyed && !res.writableEnded) {
        this.writeEvent(res, 'error', {
          message: 'Không thể hoàn tất câu trả lời.',
        });
        res.end();
      }
    } finally {
      clearTimeout(timeout);
      res.removeListener('close', abortOnClose);
      await reader?.cancel().catch(() => undefined);
    }
  }

  async findConversations(userId: string, current = 1, pageSize = 20) {
    const page = Math.max(1, current || 1);
    const limit = Math.min(50, Math.max(1, pageSize || 20));
    const filter = { user: userId };
    const [total, result] = await Promise.all([
      this.conversationModel.countDocuments(filter),
      this.conversationModel
        .find(filter)
        .select('_id')
        .sort({ lastMessageAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
    ]);

    return {
      meta: {
        current: page,
        pageSize: limit,
        pages: Math.ceil(total / limit),
        total,
      },
      result,
    };
  }

  async findMessages(
    userId: string,
    conversationId: string,
    current = 1,
    pageSize = 50,
  ) {
    await this.assertConversationOwner(userId, conversationId);
    const page = Math.max(1, current || 1);
    const limit = Math.min(100, Math.max(1, pageSize || 50));
    const filter = { conversation: conversationId };
    const [total, messages] = await Promise.all([
      this.messageModel.countDocuments(filter),
      this.messageModel
        .find(filter)
        .select('_id role content createdAt')
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
    ]);

    return {
      meta: {
        current: page,
        pageSize: limit,
        pages: Math.ceil(total / limit),
        total,
      },
      result: messages.reverse(),
    };
  }

  private async getConversation(userId: string, conversationId?: string) {
    if (conversationId) {
      return this.assertConversationOwner(userId, conversationId);
    }

    return this.conversationModel.create({ user: userId });
  }

  private async assertConversationOwner(
    userId: string,
    conversationId: string,
  ) {
    if (!Types.ObjectId.isValid(conversationId)) {
      throw new NotFoundException('Conversation not found.');
    }
    const conversation = await this.conversationModel.findOne({
      _id: conversationId,
      user: userId,
    });
    if (!conversation) throw new NotFoundException('Conversation not found.');
    return conversation;
  }

  private async loadHistory(conversationId: string): Promise<HistoryMessage[]> {
    const messages = await this.messageModel
      .find({ conversation: conversationId })
      .sort({ createdAt: -1 })
      .limit(HISTORY_LIMIT)
      .select('role content')
      .lean();

    return messages.reverse().map(({ role, content }) => ({
      role,
      content,
    }));
  }

  private parseEvent(frame: string) {
    const lines = frame.split('\n');
    const eventLine = lines.find((line) => line.startsWith('event:'));
    const dataLine = lines.find((line) => line.startsWith('data:'));
    if (!eventLine || !dataLine) return null;

    return {
      name: eventLine.slice(6).trim(),
      data: JSON.parse(dataLine.slice(5).trim()) as Record<string, unknown>,
    };
  }

  private writeEvent(res: Response, name: string, data: object) {
    res.write(`event: ${name}\ndata: ${JSON.stringify(data)}\n\n`);
  }

  private normalizeQuery(query: string) {
    const normalized = query.trim();
    if (!normalized) throw new BadRequestException('Query must not be blank.');
    return normalized;
  }

  private signToken(userId: string, retrievalScope: RetrievalScope) {
    return this.jwtService.signAsync(
      {
        permission: 'rag:query',
        retrieval_scope: retrievalScope,
      },
      {
        algorithm: 'RS256',
        privateKey: this.privateKey,
        issuer: RAG_ISSUER,
        audience: RAG_AUDIENCE,
        subject: userId,
        jwtid: randomUUID(),
        expiresIn: 120,
      },
    );
  }

  private async resolveScope(
    userId: string,
    dto: RagQueryDto,
  ): Promise<RetrievalScope> {
    if (!dto.courseId && !dto.moduleId && !dto.lessonId) {
      return { allowed_course_ids: [] };
    }

    let courseId = dto.courseId;
    let moduleId = dto.moduleId;

    if (dto.lessonId) {
      const lesson = await this.lessonModel
        .findOne({
          _id: dto.lessonId,
          isActive: true,
          isDeleted: { $ne: true },
        })
        .select('module')
        .lean();
      if (!lesson) throw new BadRequestException('Lesson not found.');

      const lessonModuleId = lesson.module.toString();
      if (moduleId && moduleId !== lessonModuleId) {
        throw new BadRequestException('Lesson does not belong to module.');
      }
      moduleId = lessonModuleId;
    }

    if (moduleId) {
      const courseModule = await this.moduleModel
        .findOne({
          _id: moduleId,
          isActive: true,
          isDeleted: { $ne: true },
        })
        .select('course')
        .lean();
      if (!courseModule) throw new BadRequestException('Module not found.');

      const moduleCourseId = courseModule.course.toString();
      if (courseId && courseId !== moduleCourseId) {
        throw new BadRequestException('Module does not belong to course.');
      }
      courseId = moduleCourseId;
    }

    const course = await this.courseModel
      .findOne({
        _id: courseId,
        isPublished: true,
        isDeleted: { $ne: true },
      })
      .select('_id')
      .lean();
    if (!course) throw new BadRequestException('Course not found.');

    const enrolled = await this.enrolmentModel.exists({
      user: userId,
      course: course._id,
      isActive: true,
      isDeleted: { $ne: true },
    });
    if (!enrolled) {
      throw new ForbiddenException('You are not enrolled in this course.');
    }

    return {
      allowed_course_ids: [course._id.toString()],
      course_id: course._id.toString(),
      module_id: moduleId,
      lesson_id: dto.lessonId,
    };
  }
}
