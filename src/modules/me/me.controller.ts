import { Body, Controller, Get, Param, Patch, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MeService } from './me.service';
import { User } from 'src/core/decorators/customize';
import { IUser } from '../users/users.interface';
import { createUploadInterceptor } from 'src/config/multer.config';
import { ChangePasswordDto } from './dto/change-password.dto';

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

  @Patch('avatar')
  @UseInterceptors(
    createUploadInterceptor('avatar', {
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      allowedExtensions: ['jpg', 'jpeg', 'png', 'webp'],
      maxFileSize: 2 * 1024 * 1024,
      folder: 'avatar'
    }),
  )
  updateMyAvatar(
    @User() user: IUser,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    return this.meService.updateMyAvatar(user, avatar);
  }

  @Patch('password')
  changeMyPassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @User() user: IUser,
  ) {
    return this.meService.changeMyPassword(user, changePasswordDto);
  }
}
