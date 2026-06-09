import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @IsNotEmpty()
    @IsMongoId()
    category: mongoose.Schema.Types.ObjectId;
}
