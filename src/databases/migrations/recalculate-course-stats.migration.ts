import { Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { Course } from 'src/modules/courses/schemas/course.schema';
import { Lesson } from 'src/modules/lessons/schemas/lesson.schema';
import { Module as CourseModule } from 'src/modules/modules/schemas/module.schema';

const logger = new Logger('RecalculateCourseStatsMigration');

export const recalculateCourseStats = async (
    courseModel: Model<Course>,
    moduleModel: Model<CourseModule>,
    lessonModel: Model<Lesson>,
) => {
    await moduleModel.updateMany({}, { $set: { totalLessons: 0, totalLength: 0 } });
    await courseModel.updateMany({}, { $set: { totalLessons: 0, totalLength: 0 } });

    const moduleStats = await lessonModel.aggregate([
        { $match: { isDeleted: { $ne: true } } },
        {
            $group: {
                _id: '$module',
                totalLessons: { $sum: 1 },
                totalLength: { $sum: { $ifNull: ['$metadata.duration', 0] } },
            },
        },
    ]);

    if (moduleStats.length) {
        await moduleModel.bulkWrite(
            moduleStats.map((stat) => ({
                updateOne: {
                    filter: { _id: stat._id },
                    update: {
                        $set: {
                            totalLessons: stat.totalLessons,
                            totalLength: stat.totalLength,
                        },
                    },
                },
            })),
        );
    }

    const courseStats = await moduleModel.aggregate([
        { $match: { isDeleted: { $ne: true } } },
        {
            $group: {
                _id: '$course',
                totalLessons: { $sum: { $ifNull: ['$totalLessons', 0] } },
                totalLength: { $sum: { $ifNull: ['$totalLength', 0] } },
            },
        },
    ]);

    if (courseStats.length) {
        await courseModel.bulkWrite(
            courseStats.map((stat) => ({
                updateOne: {
                    filter: { _id: stat._id },
                    update: {
                        $set: {
                            totalLessons: stat.totalLessons,
                            totalLength: stat.totalLength,
                        },
                    },
                },
            })),
        );
    }

    logger.log('Recalculated course/module lesson totals.');
};
