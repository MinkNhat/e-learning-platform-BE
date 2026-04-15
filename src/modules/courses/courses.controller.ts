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
      allowedMimeTypes: ['image/jpeg', 'image/png'],
      allowedExtensions: ['jpg', 'jpeg', 'png'],
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
    @Query() qs: string
  ) {
    return this.coursesService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(
    createUploadInterceptor('thumbnail', {
      allowedMimeTypes: ['image/jpeg', 'image/png'],
      allowedExtensions: ['jpg', 'jpeg', 'png'],
      maxFileSize: 2 * 1024 * 1024,
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
