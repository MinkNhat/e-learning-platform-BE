import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
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

@Module({
  imports: [
    // config mongodb
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        connectionFactory: (connection) => {
          connection.plugin(softDeletePlugin);
          return connection;
        }
      }),
      inject: [ConfigService],
    }),

    // config env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    UsersModule,
    AuthModule,
    CoursesModule,
    FilesModule,
    EnrollmentsModule,
    PermissionsModule,
    RolesModule,
    DatabasesModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
