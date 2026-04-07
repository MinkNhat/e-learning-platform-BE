import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { IUser } from 'src/modules/users/users.interface';
import { Public, User } from 'src/core/decorators/customize';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto, @User() user: IUser) {
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
  update(
    @Param('id') id: string, 
    @Body() updateCourseDto: UpdateCourseDto,
    @User() user: IUser
  ) {
    return this.coursesService.update(id, updateCourseDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.coursesService.remove(id, user);
  }
}
