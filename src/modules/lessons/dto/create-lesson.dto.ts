import { IsBoolean, IsNotEmpty, IsNumber, IsEnum, IsOptional, IsObject, IsMongoId } from 'class-validator';
import mongoose from 'mongoose';
import { LessonType } from 'src/core/enums/lesson-type.enum';

export class CreateLessonDto {
  @IsNotEmpty()
  name: string;

  content: string;
  isActive: boolean;
  isFree: boolean;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsEnum(LessonType)
  type: LessonType;

  @IsNotEmpty()
  @IsMongoId()
  module: mongoose.Schema.Types.ObjectId;

  @IsOptional()
  @IsObject()
  metadata?: {
    duration?: number;
    videoUrl?: string;
  };
}
