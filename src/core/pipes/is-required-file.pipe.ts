import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class IsRequiredFilePipe implements PipeTransform {
  constructor(private fieldName: string = 'file') {}

  transform(value: any) {
    if (!value) {
      throw new BadRequestException(`${this.fieldName} is required`);
    }
    return value;
  }
}
