import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ResponseMessage, User } from 'src/core/decorators/customize';
import { IUser } from 'src/modules/users/users.interface';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SaveQuizAnswerDto } from './dto/save-quiz-answer.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizzesService } from './quizzes.service';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post() 
  @ResponseMessage('Create quiz')
  create(@Body() dto: CreateQuizDto, @User() user: IUser) { 
    return this.quizzesService.create(dto, user); 
  }

  @Get(':id')
  findOne(@Param('id') id: string) { 
    return this.quizzesService.findOne(id); 
  }

  @Get(':id/manage')
  findOneForManage(@Param('id') id: string) { 
    return this.quizzesService.findOneForManage(id); 
  }

  @Patch(':id') 
  @ResponseMessage('Update quiz')
  update(
    @Param('id') id: string, 
    @Body() dto: UpdateQuizDto, 
    @User() user: IUser) { 
      return this.quizzesService.update(id, dto, user); 
    }

  @Delete(':id') 
  @ResponseMessage('Delete quiz')
  remove(@Param('id') id: string, @User() user: IUser) { 
    return this.quizzesService.remove(id, user); 
  }


  // QUESTIONS
  @Post('questions') 
  @ResponseMessage('Create question')
  createQuestion(@Body() dto: CreateQuestionDto) { 
    return this.quizzesService.createQuestion(dto); 
  }

  @Patch('questions/:id') 
  @ResponseMessage('Update question')
  updateQuestion(@Param('id') id: string, @Body() dto: UpdateQuestionDto) { 
    return this.quizzesService.updateQuestion(id, dto); 
  }

  @Delete('questions/:id') 
  @ResponseMessage('Delete question')
  removeQuestion(@Param('id') id: string) { 
    return this.quizzesService.removeQuestion(id); 
  }


  // QUIZ ATTEMPTS
  @Post(':id/attempts') 
  @ResponseMessage('Start quiz attempt')
  startAttempt(@Param('id') id: string, @User() user: IUser) { 
    return this.quizzesService.startAttempt(id, user); 
  }

  @Get(':id/attempts/me')
  findMyAttempts(@Param('id') id: string, @User() user: IUser) { return this.quizzesService.findMyAttempts(id, user); }

  @Put('attempts/:attemptId/answers/:questionId') @ResponseMessage('Save quiz answer')
  saveAnswer(@Param('attemptId') attemptId: string, @Param('questionId') questionId: string, @Body() dto: SaveQuizAnswerDto, @User() user: IUser) {
    return this.quizzesService.saveAnswer(attemptId, questionId, dto, user);
  }

  @Post('attempts/:id/submit') @ResponseMessage('Submit quiz attempt')
  submitAttempt(@Param('id') id: string, @User() user: IUser) { return this.quizzesService.submitAttempt(id, user); }

  @Get('attempts/:id')
  getAttempt(@Param('id') id: string, @User() user: IUser) { return this.quizzesService.getAttempt(id, user); }
}
