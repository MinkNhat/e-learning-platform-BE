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
import { AUTHORS, CATEGORIES } from './sample';
import { User } from 'src/modules/users/schemas/user.schema';
import { Role } from 'src/modules/roles/schemas/role.schema';

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

const resolveAuthorRoles = async (roleModel: Model<Role>) => {
    return Promise.all(AUTHORS.map(async ({ roleName, ...author }) => {
        const role = await roleModel.findOne({ name: roleName });

        if (!role) {
            throw new Error(`Role not found: ${roleName}`);
        }

        return {
            ...author,
            role: role._id,
        };
    }));
};

const seedAuthors = async (userModel: Model<User>, authors: any[]) => {
    const emails = authors.map((author) => author.email);
    const existingAuthors = await userModel.find({ email: { $in: emails } }).select('email');
    const existingEmails = new Set(existingAuthors.map((author) => author.email));
    const newAuthors = authors.filter((author) => !existingEmails.has(author.email));

    if (newAuthors.length === 0) {
        logger.log('Skip authors, all sample authors already exist.');
        return;
    }

    await userModel.insertMany(newAuthors);
    logger.log(`Inserted ${newAuthors.length} authors records.`);
};

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    try {
        const courseModel = app.get<Model<Course>>(getModelToken(Course.name));
        const moduleModel = app.get<Model<CourseModule>>(getModelToken(CourseModule.name));
        const lessonModel = app.get<Model<Lesson>>(getModelToken(Lesson.name));
        const categoryModel = app.get<Model<Category>>(getModelToken(Category.name));
        const userModel = app.get<Model<User>>(getModelToken(User.name));
        const roleModel = app.get<Model<Role>>(getModelToken(Role.name));
        const sampleData = loadSampleData();
        const authors = await resolveAuthorRoles(roleModel);

        await seedCollection(categoryModel, CATEGORIES as any, 'categories');
        await seedAuthors(userModel, authors);

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
