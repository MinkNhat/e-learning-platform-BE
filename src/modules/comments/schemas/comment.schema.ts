import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CommentStatus, CommentTargetType } from 'src/core/enums/comment.enum';
import { User } from 'src/modules/users/schemas/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ enum: CommentTargetType, required: true })
  targetType: CommentTargetType;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  targetId: mongoose.Types.ObjectId;

  @Prop({ required: true, trim: true, maxlength: 3000 })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Comment.name, default: null })
  parent?: Comment;

  @Prop({ enum: CommentStatus, default: CommentStatus.VISIBLE })
  status: CommentStatus;

  @Prop({ type: Object })
  updatedBy: { _id: mongoose.Schema.Types.ObjectId; email: string };

  @Prop({ type: Object })
  deletedBy: { _id: mongoose.Schema.Types.ObjectId; email: string };

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
CommentSchema.index({ targetType: 1, targetId: 1, parent: 1, createdAt: -1 });
CommentSchema.index({ author: 1, createdAt: -1 });
