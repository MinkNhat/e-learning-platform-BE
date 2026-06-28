import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Course } from "src/modules/courses/schemas/course.schema";
import { Order } from "src/modules/orders/schemas/order.schema";
import { User } from "src/modules/users/schemas/user.schema";

export type EnrolmentDocument = HydratedDocument<Enrolment>;

@Schema({timestamps: true})
export class Enrolment {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Course'})
    course: Course;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Order'})
    order: Order;

    @Prop()
    enrolDate: Date;

    @Prop()
    completedDate: Date;

    @Prop({default: true})
    isActive: boolean;

    @Prop({default: 0})
    progress: number;

    @Prop({default: 0})
    completedLessonsCount: number;

    @Prop({default: 0})
    totalLessonsSnapshot: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'})
    lastLesson: mongoose.Schema.Types.ObjectId;

    @Prop()
    lastAccessedAt: Date;

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
EnrolmentSchema.index({ user: 1, course: 1 }, { unique: true });
