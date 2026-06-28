import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import mongoose from 'mongoose';
import { CommentTargetType } from 'src/core/enums/comment.enum';

export class CreateCommentDto {
  @IsEnum(CommentTargetType)
  targetType: CommentTargetType;

  @IsMongoId()
  targetId: mongoose.Types.ObjectId;

  @IsNotEmpty() 
  @IsString() 
  @MaxLength(3000)
  content: string;

  @IsOptional() 
  @IsMongoId()
  parent?: mongoose.Types.ObjectId;
}
