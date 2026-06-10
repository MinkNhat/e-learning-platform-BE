import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { existsSync, readdirSync, readFileSync } from 'fs';
import { Model } from 'mongoose';
import { join } from 'path';
import { AppModule } from 'src/app.module';
import { Course } from 'src/modules/courses/schemas/course.schema';
import { Lesson } from 'src/modules/lessons/schemas/lesson.schema';
import { Module as CourseModule } from 'src/modules/modules/schemas/module.schema';
import { recalculateCourseStats } from './migrations/recalculate-course-stats.migration';
import { Category } from 'src/modules/categories/schemas/category.schema';
import { CATEGORIES } from './sample';

const logger = new Logger('Seed');

type CourseSampleFile = {
    courses?: Course[];
    modules?: CourseModule[];
    lessons?: Lesson[];
};

const loadSampleData = () => {
    const sampleDir = join(process.cwd(), 'src', 'databases', 'sample');

    if (!existsSync(sampleDir)) {
        throw new Error(`Sample directory not found: ${sampleDir}`);
    }

    const jsonFiles = readdirSync(sampleDir)
        .filter((fileName) => fileName.endsWith('.json'))
        .sort();

    if (jsonFiles.length === 0) {
        throw new Error(`No JSON sample files found in: ${sampleDir}`);
    }

    return jsonFiles.reduce(
        (result, fileName) => {
            const filePath = join(sampleDir, fileName);
            const fileContent = readFileSync(filePath, 'utf8');
            const sample = JSON.parse(fileContent) as CourseSampleFile;

            result.courses.push(...(sample.courses ?? []));
            result.modules.push(...(sample.modules ?? []));
            result.lessons.push(...(sample.lessons ?? []));

            return result;
        },
        {
            courses: [] as Course[],
            modules: [] as CourseModule[],
            lessons: [] as Lesson[],
        },
    );
};

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
        const categoryModel = app.get<Model<Category>>(getModelToken(Category.name));
        const sampleData = loadSampleData();

        await seedCollection(categoryModel, CATEGORIES as any, 'categories');
        await seedCollection(courseModel, sampleData.courses, 'courses');
        await seedCollection(moduleModel, sampleData.modules, 'modules');
        await seedCollection(lessonModel, sampleData.lessons, 'lessons');

        await recalculateCourseStats(courseModel, moduleModel, lessonModel);
    } catch (error) {
        logger.error('Seed failed.', error as Error);
        process.exitCode = 1;
    } finally {
        await app.close();
    }
}

bootstrap();
