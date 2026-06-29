import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BlogStatus } from 'src/core/enums/blog.enum';
import { Category } from 'src/modules/categories/schemas/category.schema';
import { User } from 'src/modules/users/schemas/user.schema';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ timestamps: true })
export class Blog {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, unique: true, trim: true })
  slug: string;

  @Prop({ trim: true, maxlength: 500 })
  description?: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  coverImage?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name, required: true })
  category: Category;

  @Prop({ enum: BlogStatus, default: BlogStatus.DRAFT })
  status: BlogStatus;

  @Prop()
  publishedAt?: Date;

  @Prop({ default: false })
  isFeatured: boolean;

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

export const BlogSchema = SchemaFactory.createForClass(Blog);
BlogSchema.index({ status: 1, publishedAt: -1 });
BlogSchema.index({ category: 1, status: 1, publishedAt: -1 });
BlogSchema.index({ author: 1, status: 1 });
BlogSchema.index({ title: 'text' });
