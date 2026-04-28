import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public, User } from 'src/core/decorators/customize';
import { verifyVnpaySignature } from './vnpay/vnpay.helper';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreatePaymentDto, @Req() req, @User() user) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    return this.paymentsService.initiatePayment(user._id, dto, ip);
  }

  @Public()
  @Get('vnpay-ipn')
  async ipn(@Query() query: Record<string, string>) {
    return this.paymentsService.handleIpn(query);
  }

  @Public()
  @Get('vnpay-return')
  async returnUrl(@Query() query: Record<string, string>, @Res() res) {
    const isValid = verifyVnpaySignature(query);
    const success = isValid && query.vnp_ResponseCode === '00';
    const code = query.vnp_ResponseCode || '01';
    
    const redirectUrl = `${process.env.FRONTEND_URL}/payment-result?success=${success}&code=${code}&orderId=${query.vnp_TxnRef}`;
    return redirectUrl;
  }
}
