import { IsInt, IsNotEmpty, Min } from "class-validator";
import mongoose from "mongoose";

export class CreateCategoryDto {
    @IsNotEmpty()
    name: string;
    
    description: string;
    isActive: boolean;
    icon: string;
    parent: mongoose.Schema.Types.ObjectId;
}
