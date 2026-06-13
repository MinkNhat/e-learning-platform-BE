import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../users/users.interface';
import { Enrolment, EnrolmentDocument } from '../enrollments/schemas/enrolment.schema';
import aqp from 'api-query-params';

@Injectable()
export class MeService {
  constructor(
    @InjectModel(Enrolment.name)
    private enrolmentModel: Model<EnrolmentDocument>,
  ) {}

  async findMyCourses(currentPage: number, limit: number, qs: string, user: IUser) {
    const { filter, sort, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    // prevent view other user courses
    delete filter.user;
    const finalFilter = {
      ...filter,
      user: user._id,
      isActive: true,
    };
    
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;
    const finalSort = sort || { enrolDate: -1, createdAt: -1 };

    const totalItems = await this.enrolmentModel.countDocuments(finalFilter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.enrolmentModel
      .find(finalFilter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(finalSort as any)
      .populate({
        path: 'course',
        select: '_id title slug shortDescription thumbnail level rating price totalLessons totalLength enrollmentCount',
        populate: [
          { path: 'category', select: '_id name slug' },
          { path: 'authors', select: '_id name avatar' },
        ],
      })
      .select(projection || '_id course enrolDate completedDate progress')
      .lean();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }
}
