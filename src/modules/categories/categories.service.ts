import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/modules/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { SlugService } from 'src/utils/slug.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: SoftDeleteModel<CategoryDocument>,
    private slugService: SlugService,
  ) { }

  private getCategoryLookupQuery(categoryIdOrSlug: string) {
    if (mongoose.Types.ObjectId.isValid(categoryIdOrSlug)) {
      return { $or: [{ _id: categoryIdOrSlug }, { slug: categoryIdOrSlug }] };
    }

    return { slug: categoryIdOrSlug };
  }

  async findRootCategories() {
    return await this.categoryModel.find({ parent: null }).select({ _id: 1, name: 1, slug: 1, level: 1, icon: 1 });
  }

  async findChildCategories(categoryIdOrSlug: string) {
    const category = await this.categoryModel.findOne(this.getCategoryLookupQuery(categoryIdOrSlug)).select({ _id: 1 });
    if (!category) throw new BadRequestException(`category with id or slug=${categoryIdOrSlug} not found`)

    return await this.categoryModel.find({ parent: category._id }).select({ _id: 1, name: 1, slug: 1, level: 1, icon: 1 });
  }

  async create(createCategoryDto: CreateCategoryDto, user: IUser) {
    const { name, parent } = createCategoryDto;
    const isExist = await this.categoryModel.findOne({ name });
    if (isExist) {
      throw new BadRequestException(`Category with name='${name}' already exists!`)
    }

    const parentCate = parent ? await this.categoryModel.findById(parent) : null;
    if (parent && !parentCate) {
      throw new BadRequestException(`Parent category with id=${parent} not found`)
    }

    const level = parentCate ? 1 : 0;
    const slug = await this.slugService.generate(this.categoryModel, name);

    const newCate = await this.categoryModel.create({
      ...createCategoryDto,
      slug,
      level,
      parent: parent ? parent : null,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    })

    return {
      _id: newCate?._id,
      name: newCate?.name,
      slug: newCate?.slug,
      createdAt: newCate?.createdAt,
    };
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.categoryModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);


    const result = await this.categoryModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select(projection as any)
      .exec();

    return {
      meta: {
        current: currentPage, 
        pageSize: limit, 
        pages: totalPages,  
        total: totalItems 
      },
      result 
    }
  }

  async findOne(categoryIdOrSlug: string) {
    const category = await this.categoryModel.findOne(this.getCategoryLookupQuery(categoryIdOrSlug));
    if (!category) throw new BadRequestException(`category with id or slug=${categoryIdOrSlug} not found`)

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`category with id=${id} not found`)

    const { parent } = updateCategoryDto;
    const currentCate = await this.categoryModel.findById(id);
    if (!currentCate) throw new BadRequestException(`category with id=${id} not found`)

    let level = currentCate.level;
    if (Object.prototype.hasOwnProperty.call(updateCategoryDto, 'parent')) {
      if (parent) {
        const parentCate = await this.categoryModel.findById(parent);
        if (!parentCate) throw new BadRequestException(`Parent category with id=${parent} not found`)
        level = 1;
      } else {
        level = 0;
      }
    }

    return await this.categoryModel.updateOne(
      { _id: id },
      {
        ...updateCategoryDto,
        level: level,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    );
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new BadRequestException(`category with id=${id} not found`)

    await this.categoryModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        }
      })
    return this.categoryModel.softDelete({
      _id: id
    })
  }
}
