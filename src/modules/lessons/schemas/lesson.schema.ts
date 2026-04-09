import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { LessonType } from 'src/core/enums/lesson-type.enum';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema({ timestamps: true })
export class Lesson {
    @Prop()
    name: string;

    @Prop()
    detail: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop({default: false})
    isFree: boolean;

    @Prop()
    order: number;

    @Prop()
    type: string;

    @Prop({ type: Object })
    metadata: {
        duration?: number;
        videoUrl?: string;
        content?: string;
    };

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

export const LessonSchema = SchemaFactory.createForClass(Lesson);