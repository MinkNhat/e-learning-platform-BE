import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type RagConversationDocument = HydratedDocument<RagConversation>;

@Schema({ timestamps: true, versionKey: false })
export class RagConversation {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  user: mongoose.Types.ObjectId;

  @Prop({ required: true, default: Date.now })
  lastMessageAt: Date;

  createdAt: Date;
  updatedAt: Date;
}

export const RagConversationSchema =
  SchemaFactory.createForClass(RagConversation);

RagConversationSchema.index({ user: 1, lastMessageAt: -1 });
