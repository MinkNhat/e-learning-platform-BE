import { IsNotEmpty } from "class-validator";

export class CreateCourseDto {
    @IsNotEmpty()
    title: string;

    shortDescription: string;
    
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;

    level: string;
    processLimit: boolean;
    languages: string[];
}
