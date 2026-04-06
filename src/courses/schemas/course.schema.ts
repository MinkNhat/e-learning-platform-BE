import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CourseDocument = HydratedDocument<Course>;

@Schema({timestamps: true})
export class Course {
    @Prop()
    title: string;

    @Prop()
    shortDescription: string;

    @Prop()
    description: string;

    @Prop()
    objectives: string[];

    @Prop()
    requirement: string;

    @Prop()
    price: number;

    @Prop()
    slug: string;

    @Prop()
    thumbnail: string;

    @Prop()
    level: string;

    @Prop()
    rating: number;

    @Prop()
    enrollmentCount: number;

    @Prop()
    processLimit: boolean;

    @Prop()
    languages: string[];

    @Prop()
    authors: string[];

    @Prop()
    isPublished: boolean;

    @Prop({type: Object})
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };

    @Prop({type: Object})
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };

    @Prop({type: Object})
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    deletedAt: Date;

    @Prop()
    isDeleted: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);