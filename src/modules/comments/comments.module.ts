import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from '../blogs/schemas/blog.schema';
import { Course, CourseSchema } from '../courses/schemas/course.schema';
import { Enrolment, EnrolmentSchema } from '../enrollments/schemas/enrolment.schema';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Comment.name, schema: CommentSchema }, 
    { name: Blog.name, schema: BlogSchema }, 
    { name: Course.name, schema: CourseSchema }, 
    { name: Enrolment.name, schema: EnrolmentSchema }
  ])],
  controllers: [CommentsController], 
  providers: [CommentsService],
})
export class CommentsModule {}
