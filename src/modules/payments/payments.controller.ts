import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public, User } from 'src/core/decorators/customize';

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
    const result = await this.paymentsService.handleReturn(query);
    const frontendUrl = process.env.FRONTEND_URL;
    const redirectUrl = new URL('/payment-result', frontendUrl);

    redirectUrl.searchParams.set('success', String(result.success));
    redirectUrl.searchParams.set('code', result.code);
    redirectUrl.searchParams.set('isValid', String(result.isValid));
    redirectUrl.searchParams.set('txnRef', result.txnRef || '');
    redirectUrl.searchParams.set('orderId', result.orderId);
    redirectUrl.searchParams.set('courseId', result.courseId);

    return res.redirect(redirectUrl.toString());
  }
}
