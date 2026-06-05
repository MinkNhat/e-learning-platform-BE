import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppModule } from 'src/app.module';
import { Course } from 'src/modules/courses/schemas/course.schema';
import { Lesson } from 'src/modules/lessons/schemas/lesson.schema';
import { Module as CourseModule } from 'src/modules/modules/schemas/module.schema';
import { INIT_COURSES, INIT_LESSONS, INIT_MODULES } from './sample';

const logger = new Logger('Seed');

const seedCollection = async <T>(model: Model<T>, items: T[], label: string) => {
    const count = await model.countDocuments({});
    if (count > 0) {
        logger.log(`Skip ${label}, already has ${count} records.`);
        return;
    }

    await model.insertMany(items);
    logger.log(`Inserted ${items.length} ${label} records.`);
};

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    try {
        const courseModel = app.get<Model<Course>>(getModelToken(Course.name));
        const moduleModel = app.get<Model<CourseModule>>(getModelToken(CourseModule.name));
        const lessonModel = app.get<Model<Lesson>>(getModelToken(Lesson.name));

        await seedCollection(courseModel, INIT_COURSES as any, 'courses');
        await seedCollection(moduleModel, INIT_MODULES as any, 'modules');
        await seedCollection(lessonModel, INIT_LESSONS as any, 'lessons');
    } catch (error) {
        logger.error('Seed failed.', error as Error);
        process.exitCode = 1;
    } finally {
        await app.close();
    }
}

bootstrap();
