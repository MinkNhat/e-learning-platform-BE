import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { VnpayTransactionStatus } from "src/core/enums/payment.enum";
import { Payment } from "src/modules/payments/schemas/payment.schema";

@Schema({timestamps: true})
export class VnpayTransaction {
    @Prop({ type: Types.ObjectId, ref: 'Payment', required: true })
    payment: Payment;

    @Prop({ required: true, unique: true, index: true })
    vnpTxnRef: string;

    @Prop()
    vnpTransactionNo: string;

    @Prop()
    vnpBankCode: string;

    @Prop()
    vnpBankTranNo: string;

    @Prop()
    vnpCardType: string;

    @Prop()
    vnpResponseCode: string; 

    @Prop()
    vnpPayDate: string;

    @Prop({ enum: VnpayTransactionStatus, default: VnpayTransactionStatus.INITIATED })
    status: VnpayTransactionStatus;

    @Prop({ type: Object })
    rawResponse: Record<string, string>;
}

export const VnpayTransactionSchema = SchemaFactory.createForClass(VnpayTransaction);
