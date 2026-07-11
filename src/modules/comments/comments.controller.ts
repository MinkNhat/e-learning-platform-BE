import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CommentTargetType } from 'src/core/enums/comment.enum';
import { Public, ResponseMessage, User } from 'src/core/decorators/customize';
import { IUser } from 'src/modules/users/users.interface';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get() 
  @Public()
  findAll(
    @Query('targetType') targetType: CommentTargetType, 
    @Query('targetId') targetId: string, 
    @Query('current') current: string, 
    @Query('pageSize') pageSize: string,
    @Query() query: Record<string, string>,
  ) {
    const qs = new URLSearchParams(
      Object.entries(query).filter(([key]) => !['targetType', 'targetId', 'current', 'pageSize'].includes(key)),
    ).toString();

    return this.commentsService.findAll(targetType, targetId, +current || 1, +pageSize || 10, qs);
  }

  @Post() 
  @ResponseMessage('Create comment')
  create(@Body() dto: CreateCommentDto, @User() user: IUser) { 
    return this.commentsService.create(dto, user); 
  }

  @Patch(':id') 
  @ResponseMessage('Update comment')
  update(
    @Param('id') id: string, 
    @Body() dto: UpdateCommentDto, 
    @User() user: IUser
  ) { 
    return this.commentsService.update(id, dto, user); 
  }

  @Delete(':id') 
  @ResponseMessage('Delete comment')
  remove(@Param('id') id: string, @User() user: IUser) { 
    return this.commentsService.remove(id, user); 
  }
}
