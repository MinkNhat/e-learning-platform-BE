import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../categories/schemas/category.schema';
import { SlugService } from 'src/utils/slug.service';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { Blog, BlogSchema } from './schemas/blog.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Blog.name, schema: BlogSchema }, 
    { name: Category.name, schema: CategorySchema }
  ])],
  controllers: [BlogsController], 
  providers: [BlogsService, SlugService], 
  exports: [BlogsService],
})
export class BlogsModule {}
