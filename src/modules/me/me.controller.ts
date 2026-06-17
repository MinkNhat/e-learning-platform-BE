import { Controller, Get, Query } from '@nestjs/common';
import { MeService } from './me.service';
import { Public, User } from 'src/core/decorators/customize';
import { IUser } from '../users/users.interface';

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Public()
  @Get('courses')
  findMyCourses(
    @Query("current") currentPage: string,
    @Query("pageSize") limit: string,
    @Query() qs: string,
    @User() user: IUser,
  ) {
    return this.meService.findMyCourses(+currentPage, +limit, qs, user);
  }
}
