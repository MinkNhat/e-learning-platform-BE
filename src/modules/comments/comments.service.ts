import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Blog, BlogDocument } from '../blogs/schemas/blog.schema';
import { Course, CourseDocument } from '../courses/schemas/course.schema';
import { Enrolment, EnrolmentDocument } from '../enrollments/schemas/enrolment.schema';
import { IUser } from '../users/users.interface';
import { CommentTargetType } from 'src/core/enums/comment.enum';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: SoftDeleteModel<CommentDocument>,
    @InjectModel(Blog.name) private blogModel: SoftDeleteModel<BlogDocument>,
    @InjectModel(Course.name) private courseModel: SoftDeleteModel<CourseDocument>,
    @InjectModel(Enrolment.name) private enrolmentModel: SoftDeleteModel<EnrolmentDocument>,
  ) {}

  private async assertTarget(targetType: CommentTargetType, targetId: string, userId?: string) {
    if (!mongoose.Types.ObjectId.isValid(targetId)) throw new BadRequestException('Invalid comment target');

    if (targetType === CommentTargetType.BLOG) {
      const blog = await this.blogModel.findOne({ _id: targetId, status: 'published' });
      if (!blog) throw new BadRequestException('Blog not found or unpublished');
      return;
    }

    const course = await this.courseModel.findOne({ _id: targetId, isPublished: true });
    if (!course) throw new BadRequestException('Course not found or unpublished');

    if (userId) {
      const enrolled = await this.enrolmentModel.exists({ user: userId, course: targetId, isActive: true });
      if (!enrolled) throw new ForbiddenException('You must be enrolled to comment on this course');
    }
  }

  async findAll(targetType: CommentTargetType, targetId: string, currentPage = 1, limit = 10) {
    await this.assertTarget(targetType, targetId);

    const filter = { targetType, targetId, parent: null };
    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = await this.commentModel.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.commentModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort({ createdAt: -1 })
      .populate('author', '_id name avatar')
      .lean();

    const rootIds = result.map((comment) => comment._id);
    const replies = rootIds.length ? await this.commentModel.find({ parent: { $in: rootIds } })
      .sort({ createdAt: 1 })
      .populate('author', '_id name avatar')
      .lean() : [];

    const repliesByParent = new Map<string, any[]>();
    replies.forEach((reply) => {
      const key = reply.parent.toString();
      repliesByParent.set(key, [...(repliesByParent.get(key) || []), reply]);
    });

    return {
      meta: {
        current: currentPage,
        pageSize: defaultLimit,
        pages: totalPages,
        total: totalItems
      },
      result: result.map((comment) => ({ ...comment, replies: repliesByParent.get(comment._id.toString()) || [] })),
    };
  }

  async create(dto: CreateCommentDto, user: IUser) {
    await this.assertTarget(dto.targetType, dto.targetId.toString(), user._id);

    if (dto.parent) {
      const parent = await this.commentModel.findById(dto.parent);
      if (!parent || parent.parent || parent.targetType !== dto.targetType || parent.targetId.toString() !== dto.targetId.toString()) {
        throw new BadRequestException('Reply parent is invalid');
      }
    }

    return this.commentModel.create({ ...dto, author: user._id });
  }

  async update(id: string, dto: UpdateCommentDto, user: IUser) {
    const comment = await this.commentModel.findById(id);
    if (!comment) throw new BadRequestException('Comment not found');

    if (comment.author.toString() !== user._id) throw new ForbiddenException('You can only edit your own comment');

    return this.commentModel.updateOne({ _id: id }, { ...dto, updatedBy: { _id: user._id, email: user.email } });
  }

  async remove(id: string, user: IUser) {
    const comment = await this.commentModel.findById(id);
    if (!comment) throw new BadRequestException('Comment not found');

    if (comment.author.toString() !== user._id) throw new ForbiddenException('You can only delete your own comment');

    await this.commentModel.updateOne(
      { _id: id }, 
      { 
        content: '[Deleted comment]', 
        deletedBy: { _id: user._id, email: user.email } 
      }
    );
    
    return this.commentModel.softDelete({ _id: id });
  }
}
