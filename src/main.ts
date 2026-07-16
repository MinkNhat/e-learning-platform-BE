import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { isAbsolute, join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { TransformInterceptor } from './core/interceptors/transform.interceptor';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(Logger));

  const configService = app.get(ConfigService);

  // apply JwtAuthGuard globally
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // apply transform interceptor globally
  app.useGlobalInterceptors(new TransformInterceptor(reflector));

  app.useStaticAssets(join(__dirname, '..', 'public'));
  const uploadPath = process.env.UPLOAD_PATH || 'upload';
  app.useStaticAssets(
    isAbsolute(uploadPath) ? uploadPath : join(process.cwd(), uploadPath),
    {
      prefix: '/upload',
    },
  );
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  
  // apply validation pipe globally
  app.useGlobalPipes(new ValidationPipe());

  // config versioning
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
  });

  // config CORS
  app.enableCors({
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "credentials": true,
  });

  // config cookies
  app.use(cookieParser());

  // config helmet
  app.use(helmet());
  
  const port = configService.get<string>('PORT');
  await app.listen(port);
  app.get(Logger).log(`Application is running on port ${port}`);
}
bootstrap();
