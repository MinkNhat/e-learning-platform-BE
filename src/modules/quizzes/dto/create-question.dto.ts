import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsBoolean, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import mongoose from 'mongoose';
import { QuestionType } from 'src/core/enums/quiz.enum';

export class QuestionOptionDto {
  @IsNotEmpty() 
  @IsString()
  content: string;

  @IsBoolean()
  isCorrect: boolean;

  @IsNumber() @Min(1)
  order: number;
}

export class CreateQuestionDto {
  @IsMongoId()
  quiz: mongoose.Types.ObjectId;

  @IsEnum(QuestionType)
  type: QuestionType;

  @IsNotEmpty() 
  @IsString()
  content: string;

  @IsOptional() 
  @IsString()
  explanation?: string;

  @IsOptional() 
  @IsNumber() 
  @Min(0)
  points?: number;

  @IsNumber() 
  @Min(1)
  order: number;

  @IsOptional() 
  @IsArray() 
  @ValidateNested({ each: true }) 
  @Type(() => QuestionOptionDto)
  options?: QuestionOptionDto[];

  @IsOptional() 
  @IsArray() 
  @IsString({ each: true })
  @ArrayMinSize(1)
  acceptedAnswers?: string[];

  @IsOptional() 
  @IsBoolean()
  caseSensitive?: boolean;
}
