import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Public, ResponseMessage, User } from 'src/core/decorators/customize';
import { IUser } from 'src/modules/users/users.interface';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { createUploadInterceptor } from 'src/config/multer.config';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post() 
  @UseInterceptors(
    createUploadInterceptor('coverImage', {
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      allowedExtensions: ['jpg', 'jpeg', 'png', 'webp'],
      maxFileSize: 5 * 1024 * 1024,
      folder: 'coverImages'
    }),
  )
  @ResponseMessage('Create a new blog')
  create(
    @Body() dto: CreateBlogDto, 
    @User() user: IUser,
    @UploadedFile() coverImage: Express.Multer.File
  ) { 
    if(coverImage) {
      dto.coverImage = coverImage.filename;
    }
    return this.blogsService.create(dto, user); 
  }

  @Get() 
  @Public()
  findAll(
    @Query('current') current: string, 
    @Query('pageSize') pageSize: string, 
    @Query() qs: string
  ) {
    return this.blogsService.findAll(+current, +pageSize, qs);
  }

  @Get('manage')
  findAllForManage(
    @Query('current') current: string, 
    @Query('pageSize') pageSize: string, 
    @Query() qs: string
  ) {
    return this.blogsService.findAll(+current, +pageSize, qs, true);
  }

  @Get(':id') 
  @Public()
  findOne(@Param('id') id: string) { 
    return this.blogsService.findOne(id); 
  }

  @Patch(':id') 
  @ResponseMessage('Update blog')
  @UseInterceptors(
    createUploadInterceptor('coverImage', {
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      allowedExtensions: ['jpg', 'jpeg', 'png', 'webp'],
      maxFileSize: 5 * 1024 * 1024,
      folder: 'coverImages'
    }),
  )
  update(
    @Param('id') id: string, 
    @Body() dto: UpdateBlogDto, 
    @User() user: IUser,
    @UploadedFile() coverImage: Express.Multer.File
  ) { 
    if(coverImage) {
      dto.coverImage = coverImage.filename;
    }
    return this.blogsService.update(id, dto, user); 
  }

  @Delete(':id') 
  @ResponseMessage('Delete blog')
  remove(
    @Param('id') id: string, 
    @User() user: IUser
  ) { 
    return this.blogsService.remove(id, user); 
  }
}
