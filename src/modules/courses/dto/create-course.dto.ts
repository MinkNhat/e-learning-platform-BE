import { IsArray, IsNotEmpty, IsString } from "class-validator";

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
    objectives: string[];

    @IsArray()
    @IsString({ each: true })
    languages: string[];

    @IsArray()
    @IsString({ each: true })
    authors: string[];

    @IsNotEmpty()
    thumbnail: string;

    requirement: string;
    level: string;
    isProcessLimit: boolean;
    isPublished: boolean;
}
