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

  @IsNotEmpty()
  @IsMongoId()
  course: mongoose.Schema.Types.ObjectId;
}
