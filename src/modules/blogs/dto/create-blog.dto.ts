import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import mongoose from 'mongoose';
import { BlogStatus } from 'src/core/enums/blog.enum';

export class CreateBlogDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsMongoId()
  category: mongoose.Types.ObjectId;

  @IsOptional()
  coverImage?: string;

  @IsOptional() 
  @IsEnum(BlogStatus)
  status?: BlogStatus;

  @IsOptional() 
  isFeatured?: boolean;
}
