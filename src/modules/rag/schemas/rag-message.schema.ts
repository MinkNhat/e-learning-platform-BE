import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { RagConversation } from './rag-conversation.schema';

export type RagMessageDocument = HydratedDocument<RagMessage>;

export enum RagMessageRole {
  USER = 'user',
  ASSISTANT = 'assistant',
}

@Schema({ timestamps: true, versionKey: false })
export class RagMessage {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: RagConversation.name,
    required: true,
  })
  conversation: mongoose.Types.ObjectId;

  @Prop({ enum: RagMessageRole, required: true })
  role: RagMessageRole;

  @Prop({ required: true, maxlength: 100_000 })
  content: string;

  @Prop({ type: [mongoose.Schema.Types.Mixed], default: [] })
  sources: Record<string, unknown>[];

  createdAt: Date;
  updatedAt: Date;
}

export const RagMessageSchema = SchemaFactory.createForClass(RagMessage);

RagMessageSchema.index({ conversation: 1, createdAt: -1 });
