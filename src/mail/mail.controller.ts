import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
import { Public } from 'src/decorator/customize';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private mailerService: MailerService,
  ) {}

  @Get()
  @Public()
  async sendEmail() {
    await this.mailerService.sendMail({
      to: "user@example.com",
      from: "noreply@example.com",
      subject: "Test Email",
      text: "This is a test email sent from NestJS using the MailerModule.",
    })
  }
}
