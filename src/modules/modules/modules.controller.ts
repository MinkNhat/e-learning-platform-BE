import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ResponseMessage, User } from 'src/core/decorators/customize';
import { IUser } from 'src/modules/users/users.interface';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post()
  @ResponseMessage('Create a new module')
  create(@Body() createModuleDto: CreateModuleDto, @User() user: IUser) {
    return this.modulesService.create(createModuleDto, user);
  }

  @Get()
  @ResponseMessage('Fetch modules with paginate')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string
  ) {
    return this.modulesService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @ResponseMessage('Fetch a module by id')
  findOne(@Param('id') id: string) {
    return this.modulesService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('Update a module')
  update(
    @Param('id') id: string,
    @Body() updateModuleDto: UpdateModuleDto,
    @User() user: IUser
  ) {
    return this.modulesService.update(id, updateModuleDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete a module')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.modulesService.remove(id, user);
  }
}
