import { IsEnum, IsNotEmpty } from "class-validator";
import { PaymentProvider } from "src/core/enums/payment.enum";

export class CreatePaymentDto {
    @IsNotEmpty()
    courseId: string;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    @IsEnum(PaymentProvider)
    provider: PaymentProvider;
}
