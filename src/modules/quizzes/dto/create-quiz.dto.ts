import { IsBoolean, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import mongoose from 'mongoose';

export class CreateQuizDto {
  @IsNotEmpty() @IsString()
  title: string;

  @IsOptional() @IsString()
  description?: string;

  @IsMongoId()
  module: mongoose.Types.ObjectId;

  @IsNumber() @Min(1)
  order: number;

  @IsOptional() @IsBoolean()
  isActive?: boolean;

  @IsOptional() @IsBoolean()
  isFree?: boolean;

  @IsOptional() @IsNumber() @Min(1)
  timeLimitSeconds?: number;

  @IsOptional() @IsNumber() @Min(0) @Max(100)
  passingScore?: number;

  @IsOptional() @IsNumber() @Min(1)
  maxAttempts?: number;

  @IsOptional() @IsBoolean()
  shuffleQuestions?: boolean;

  @IsOptional() @IsBoolean()
  shuffleOptions?: boolean;

  @IsOptional() @IsBoolean()
  showResultAfterSubmit?: boolean;
}
