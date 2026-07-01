import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { IUser } from 'src/modules/users/users.interface';
import { Public, User } from 'src/core/decorators/customize';
import { createUploadInterceptor } from 'src/config/multer.config';
import { IsRequiredFilePipe } from 'src/core/pipes/is-required-file.pipe';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UseInterceptors(
    createUploadInterceptor('thumbnail', {
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      allowedExtensions: ['jpg', 'jpeg', 'png', 'webp'],
      maxFileSize: 2 * 1024 * 1024,
      folder: 'thumbnails'
    }),
  )
  create(
    @Body() createCourseDto: CreateCourseDto, 
    @User() user: IUser,
    @UploadedFile(new IsRequiredFilePipe('thumbnail')) thumbnail: Express.Multer.File
  ) {
    if(thumbnail) {
      createCourseDto.thumbnail = thumbnail.filename;
    }
    return this.coursesService.create(createCourseDto, user);
  }

  @Get()
  @Public()
  findAll(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() query: Record<string, string>,
    @Query('excludeEnrolled') excludeEnrolled: string,
    @Query('userId') userId: string,
    @Query('includeUnpublished') includeUnpublished: string,
  ) {
    const qs = new URLSearchParams(
      Object.entries(query).filter(([key]) => !['current', 'pageSize', 'excludeEnrolled', 'userId', 'includeUnpublished'].includes(key)),
    ).toString();
    
    return this.coursesService.findAll(+currentPage, +limit, qs, excludeEnrolled === 'true', userId, includeUnpublished === 'true');
  }

  @Get('search')
  @Public()
  search(
    @Query('q') query: string,
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('scope') scope?: string,
  ) {
    return this.coursesService.search(query, +page, +limit, scope);
  }

  @Get(':id/manage')
  findOneForManage(@Param('id') id: string): Promise<any> {
    return this.coursesService.findOneForManage(id);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string): Promise<any> {
    return this.coursesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(
    createUploadInterceptor('thumbnail', {
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      allowedExtensions: ['jpg', 'jpeg', 'png', 'webp'],
      maxFileSize: 5 * 1024 * 1024,
      folder: 'thumbnails'
    }),
  )
  update(
    @Param('id') id: string, 
    @Body() updateCourseDto: UpdateCourseDto,
    @User() user: IUser,
    @UploadedFile() thumbnail: Express.Multer.File
  ) {
    if(thumbnail) {
      updateCourseDto.thumbnail = thumbnail.filename;
    }
    return this.coursesService.update(id, updateCourseDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.coursesService.remove(id, user);
  }
}
