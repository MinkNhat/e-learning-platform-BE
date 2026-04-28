import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { PaymentStatus } from "src/core/enums/payment.enum";
import { Course } from "src/modules/courses/schemas/course.schema";
import { Payment } from "src/modules/payments/schemas/payment.schema";
import { User } from "src/modules/users/schemas/user.schema";

@Schema({timestamps: true})
export class Order {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: User;

    @Prop({ type: Types.ObjectId, ref: 'Course', required: true })
    course: Course;

    @Prop({ required: true })
    amount: number; // value at the time of purchase

    @Prop({ default: 'VND' })
    currency: string;

    @Prop({ type: Types.ObjectId, ref: 'Payment' })
    payment: Payment

    @Prop({ default: PaymentStatus.PENDING })
    status: PaymentStatus;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
