import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import slugify from 'slugify';

@Injectable()
export class SlugService {
  async generate(model: Model<any>, value: string, field = 'slug') {
    const baseSlug = slugify(value, {
      lower: true,
      strict: true,
      locale: 'en',
    });

    let slug = baseSlug;
    let count = 1;

    while (await model.exists({ [field]: slug })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    return slug;
  }
}