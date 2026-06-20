import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { MeService } from './me.service';
import { User } from 'src/core/decorators/customize';
import { IUser } from '../users/users.interface';

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get('courses')
  findMyCourses(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string,
    @User() user: IUser,
  ) {
    return this.meService.findMyCourses(+currentPage, +limit, qs, user);
  }

  @Get('courses/:courseSlug/continue')
  findMyRecentLesson(
    @Param('courseSlug') courseSlug: string,
    @User() user: IUser,
  ) {
    return this.meService.findMyRecentLesson(courseSlug, user);
  }

  @Get('lessons/:lessonId')
  findMyLesson(
    @Param('lessonId') lessonId: string,
    @Query('course') courseSlug: string,
    @User() user: IUser,
  ) {
    return this.meService.findMyLesson(courseSlug, lessonId, user);
  }

  @Patch('lessons/:lessonId/complete')
  completeLesson(
    @Param('lessonId') lessonId: string,
    @Query('course') courseSlug: string,
    @User() user: IUser,
  ) {
    return this.meService.completeLesson(courseSlug, lessonId, user);
  }
}
