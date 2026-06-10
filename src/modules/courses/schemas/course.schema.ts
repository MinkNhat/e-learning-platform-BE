import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Category } from "src/modules/categories/schemas/category.schema";
import { User } from "src/modules/users/schemas/user.schema";

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

    @Prop({default: 0})
    totalLessons: number;

    @Prop({default: 0})
    totalLength: number;

    @Prop({default: false})
    isProcessLimit: boolean;

    @Prop()
    languages: string[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }], default: [] })
    authors: User[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name, required: true })
    category: Category;

    @Prop({default: true})
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
