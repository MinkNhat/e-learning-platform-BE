import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from 'src/modules/courses/schemas/course.schema';
import { Lesson } from 'src/modules/lessons/schemas/lesson.schema';

export type ModuleDocument = HydratedDocument<Module>;

@Schema({ timestamps: true })
export class Module {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop()
    order: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Course.name })
    course: Course;

    @Prop({ type: Object })
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    }

    @Prop({ type: Object })
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    }

    @Prop({ type: Object })
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    }

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    isDeleted: boolean;

    @Prop()
    deletedAt: Date;
}

export const ModuleSchema = SchemaFactory.createForClass(Module);