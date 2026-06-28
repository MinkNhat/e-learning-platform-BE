import { IsArray, IsMongoId, IsOptional, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class SaveQuizAnswerDto {
  @IsOptional() @IsArray() @IsMongoId({ each: true })
  selectedOptionIds?: mongoose.Types.ObjectId[];

  @IsOptional() @IsString()
  textAnswer?: string;
}
