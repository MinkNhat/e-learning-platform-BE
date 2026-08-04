import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { SkipResponseTransform, User } from 'src/core/decorators/customize';
import { IUser } from '../users/users.interface';
import { RagQueryDto } from './dto/rag-query.dto';
import { RagService } from './rag.service';

@Controller('rag')
export class RagController {
  constructor(private readonly ragService: RagService) {}

  @Post('query/stream')
  @HttpCode(HttpStatus.OK)
  @SkipResponseTransform()
  stream(
    @Body() dto: RagQueryDto,
    @User() user: IUser,
    @Res() response: Response,
  ) {
    return this.ragService.stream(user._id, dto, response);
  }

  @Get('conversations')
  findConversations(
    @User() user: IUser,
    @Query('current') current?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return this.ragService.findConversations(
      user._id,
      Number(current) || 1,
      Number(pageSize) || 20,
    );
  }

  @Get('conversations/:conversationId/messages')
  findMessages(
    @User() user: IUser,
    @Param('conversationId') conversationId: string,
    @Query('current') current?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return this.ragService.findMessages(
      user._id,
      conversationId,
      Number(current) || 1,
      Number(pageSize) || 50,
    );
  }
}
