import { Optional } from "@nestjs/common";
import { IsArray, IsEnum, IsNotEmpty, IsString } from "class-validator";
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

    @IsArray()
    @IsString({ each: true })
    @Optional()
    objectives: string[];

    @IsArray()
    @IsString({ each: true })
    @Optional()
    languages: string[];

    @IsArray()
    @IsString({ each: true })
    @Optional()
    authors: string[];

    // @IsNotEmpty()
    thumbnail: string;

    requirement: string;

    @IsEnum(CourseLevel)
    level: CourseLevel;

    isProcessLimit: boolean;
    isPublished: boolean;
}
