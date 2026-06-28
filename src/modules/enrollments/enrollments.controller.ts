import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Public, User } from 'src/core/decorators/customize';
import { IUser } from '../users/users.interface';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Public()
  @Get('check')
  check(
    @Query('userId') userId: string,
    @Query('courseId') courseId: string,
  ) {
    return this.enrollmentsService.isEnrolled(userId, courseId);
  }

  @Post('free')
  enrollFree(@Body('courseId') courseId: string, @User() user: IUser) {
    return this.enrollmentsService.enrollFree(user._id, courseId);
  }
}
