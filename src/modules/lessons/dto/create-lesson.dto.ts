import { IsBoolean, IsNotEmpty, IsNumber, IsEnum, IsOptional, IsObject } from 'class-validator';
import { LessonType } from 'src/core/enums/lesson-type.enum';

export class CreateLessonDto {
  @IsNotEmpty()
  name: string;

  detail: string;
  isActive: boolean;
  isFree: boolean;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsEnum(LessonType)
  type: LessonType;

  @IsOptional()
  @IsObject()
  metadata?: {
    duration?: number;
    videoUrl?: string;
    content?: string;
  };
}
