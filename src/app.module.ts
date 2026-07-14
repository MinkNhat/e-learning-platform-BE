import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { CoursesModule } from './modules/courses/courses.module';
import { FilesModule } from './modules/files/files.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RolesModule } from './modules/roles/roles.module';
import { DatabasesModule } from './databases/databases.module';
import { MailModule } from './modules/mail/mail.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ModulesModule } from './modules/modules/modules.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { OrdersModule } from './modules/orders/orders.module';
import { MeModule } from './modules/me/me.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { CommentsModule } from './modules/comments/comments.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { User, UserSchema } from './modules/users/schemas/user.schema';
import { Course, CourseSchema } from './modules/courses/schemas/course.schema';
import { Blog, BlogSchema } from './modules/blogs/schemas/blog.schema';
import {
  Enrolment,
  EnrolmentSchema,
} from './modules/enrollments/schemas/enrolment.schema';
import { Order, OrderSchema } from './modules/orders/schemas/order.schema';
import {
  Payment,
  PaymentSchema,
} from './modules/payments/schemas/payment.schema';
import { createLoggerConfig } from './config/logger.config';

@Module({
  imports: [
    // config env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        createLoggerConfig(
          configService.get<string>('LOG_LEVEL'),
          configService.get<string>('NODE_ENV'),
        ),
    }),

    // config mongodb
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        connectionFactory: (connection) => {
          connection.plugin(softDeletePlugin);
          return connection;
        },
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Course.name, schema: CourseSchema },
      { name: Blog.name, schema: BlogSchema },
      { name: Enrolment.name, schema: EnrolmentSchema },
      { name: Order.name, schema: OrderSchema },
      { name: Payment.name, schema: PaymentSchema },
    ]),

    UsersModule,
    AuthModule,
    CoursesModule,
    FilesModule,
    EnrollmentsModule,
    PermissionsModule,
    RolesModule,
    DatabasesModule,
    MailModule,
    CategoriesModule,
    ModulesModule,
    LessonsModule,
    PaymentsModule,
    OrdersModule,
    MeModule,
    BlogsModule,
    CommentsModule,
    QuizzesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
