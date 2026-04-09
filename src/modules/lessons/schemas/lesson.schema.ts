import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Module } from 'src/modules/modules/schemas/module.schema';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema({ timestamps: true })
export class Lesson {
    @Prop()
    name: string;

    @Prop()
    content: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop({default: false})
    isFree: boolean;

    @Prop()
    order: number;

    @Prop()
    type: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Module'})
    module: Module;

    @Prop({ type: Object })
    metadata: {
        duration?: number;
        videoUrl?: string;
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