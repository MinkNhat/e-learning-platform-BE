import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Public, ResponseMessage, User } from 'src/core/decorators/customize';
import { IUser } from '../users/users.interface';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Get()
  @ResponseMessage('Fetch enrollments with paginate')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.enrollmentsService.findAll(+currentPage, +limit, qs);
  }

  @Post()
  @ResponseMessage('Create enrollment manually')
  create(@Body('userId') userId: string, @Body('courseId') courseId: string) {
    return this.enrollmentsService.enrollManual(userId, courseId);
  }

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
