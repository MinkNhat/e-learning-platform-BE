import { Optional } from "@nestjs/common";
import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import mongoose from "mongoose";
import { CourseLevel } from "src/core/enums/course-level.enum";

export class CreateCourseDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    shortDescription: string;
    
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    objectives?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    languages?: string[];

    @IsArray()
    @IsMongoId({ each: true })
    authors: string[];

    @IsNotEmpty()
    @IsMongoId()
    category: mongoose.Schema.Types.ObjectId;

    // @IsNotEmpty()
    thumbnail: string;

    requirement: string;

    @IsEnum(CourseLevel)
    level: CourseLevel;

    isProcessLimit: boolean;
    isPublished: boolean;
}
