import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { BlogStatus } from 'src/core/enums/blog.enum';
import { IUser } from 'src/modules/users/users.interface';
import { Category, CategoryDocument } from '../categories/schemas/category.schema';
import { SlugService } from 'src/utils/slug.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { getLookupQuery } from 'src/utils/utils';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name) private blogModel: SoftDeleteModel<BlogDocument>,
    @InjectModel(Category.name) private categoryModel: SoftDeleteModel<CategoryDocument>,
    private slugService: SlugService,
  ) {}

  private async assertRootCategory(categoryId: string) {
    const category = await this.categoryModel.findById(categoryId);
    if (!category || category.parent) throw new BadRequestException('Blog category must be root category');
    if (!category.isActive) throw new BadRequestException('Blog category is inactive');
    return category;
  }

  async create(dto: CreateBlogDto, user: IUser) {
    await this.assertRootCategory(dto.category.toString());
    
    const status = dto.status ?? BlogStatus.DRAFT;
    const blog = await this.blogModel.create({
      ...dto,
      status,
      slug: await this.slugService.generate(this.blogModel, dto.title),
      author: user._id,
      ...(status === BlogStatus.PUBLISHED ? { publishedAt: new Date() } : {}),
      createdBy: { _id: user._id, email: user.email },
    });

    return { 
      _id: blog._id, 
      title: blog.title, 
      slug: blog.slug, 
    };
  }

  async findAll(currentPage: number, limit: number, qs: string, includeUnpublished = false) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const finalFilter = includeUnpublished ? filter : { ...filter, status: BlogStatus.PUBLISHED };

    const totalItems = await this.blogModel.countDocuments(finalFilter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.blogModel.find(finalFilter)
      .skip(offset)
      .limit(defaultLimit)
      .sort((sort as any) || { publishedAt: -1, createdAt: -1 })
      .populate([
        { path: 'author', select: '_id name avatar' },
        { path: 'category', select: '_id name slug' },
      ])
      .select(projection)
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: defaultLimit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }

  async findOne(idOrSlug: string) {
    const blog = await this.blogModel
      .findOne({ ...getLookupQuery(idOrSlug)})
      .populate([{ path: 'author', select: '_id name avatar' }, { path: 'category', select: '_id name slug' }]).lean();

    if (!blog) throw new BadRequestException(`Blog with id or slug='${idOrSlug}' not found`);
    return blog;
  }

  async update(id: string, dto: UpdateBlogDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`Blog with id='${id}' not found`);

    const blog = await this.blogModel.findById(id);
    if (!blog) throw new BadRequestException(`Blog with id='${id}' not found`);

    if (dto.category) await this.assertRootCategory(dto.category.toString());

    const payload: any = { 
      ...dto, 
      updatedBy: { _id: user._id, email: user.email } 
    };
    if (dto.status === BlogStatus.PUBLISHED && blog.status !== BlogStatus.PUBLISHED) payload.publishedAt = new Date();

    return this.blogModel.updateOne({ _id: id }, payload);
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`Blog with id='${id}' not found`);

    await this.blogModel.updateOne({ _id: id }, { deletedBy: { _id: user._id, email: user.email } });
    return this.blogModel.softDelete({ _id: id });
  }
}
