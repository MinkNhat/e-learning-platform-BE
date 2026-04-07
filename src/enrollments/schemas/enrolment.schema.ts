import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Course } from "src/courses/schemas/course.schema";
import { User } from "src/users/schemas/user.schema";

export type EnrolmentDocument = HydratedDocument<Enrolment>;

@Schema({timestamps: true})
export class Enrolment {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Course'})
    course: Course;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop()
    enrolDate: Date;

    @Prop()
    completedDate: Date;

    @Prop({default: true})
    isActive: boolean;

    @Prop({default: 0})
    progress: number;

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

export const EnrolmentSchema = SchemaFactory.createForClass(Enrolment);
