import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Public } from 'src/core/decorators/customize';

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
}
