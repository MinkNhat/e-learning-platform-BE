import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class CreateModuleDto {
  @IsNotEmpty()
  name: string;

  description: string;
  isActive: boolean;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'each lesson must be a mongo object id' })
  lessons?: mongoose.Schema.Types.ObjectId[];
}
