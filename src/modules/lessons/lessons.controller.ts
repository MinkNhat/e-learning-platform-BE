import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ResponseMessage, User } from 'src/core/decorators/customize';
import { IUser } from 'src/modules/users/users.interface';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @ResponseMessage('Create a new lesson')
  create(@Body() createLessonDto: CreateLessonDto, @User() user: IUser) {
    return this.lessonsService.create(createLessonDto, user);
  }

  @Patch(':id')
  @ResponseMessage('Update a lesson')
  update(
    @Param('id') id: string,
    @Body() updateLessonDto: UpdateLessonDto,
    @User() user: IUser
  ) {
    return this.lessonsService.update(id, updateLessonDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete a lesson')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.lessonsService.remove(id, user);
  }
}
