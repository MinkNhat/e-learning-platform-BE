import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { PaymentProvider, PaymentStatus } from "src/core/enums/payment.enum";
import { Order } from "src/modules/orders/schemas/order.schema";
import { User } from "src/modules/users/schemas/user.schema";

@Schema({timestamps: true})
export class Payment {
    @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
    order: Order;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: User;

    @Prop({ enum: PaymentProvider, required: true })
    provider: PaymentProvider;

    @Prop({ required: true })
    amount: number;

    @Prop({ default: 'VND' })
    currency: string;

    @Prop({ default: PaymentStatus.PENDING })
    status: PaymentStatus;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
