import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { Order, OrderSchema } from '../orders/schemas/order.schema';
import { VnpayTransaction, VnpayTransactionSchema } from './schemas/vnpay-transaction.schema';
import { EnrollmentsModule } from '../enrollments/enrollments.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Payment.name, schema: PaymentSchema },
      { name: VnpayTransaction.name, schema: VnpayTransactionSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
    EnrollmentsModule,
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
