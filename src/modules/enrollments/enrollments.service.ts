import { Injectable } from '@nestjs/common';
import { CreateEnrolmentDto } from './dto/create-enrolment.dto';
import { UpdateEnrolmentDto } from './dto/update-enrolment.dto';

@Injectable()
export class EnrollmentsService {
  create(createEnrolmentDto: CreateEnrolmentDto) {
    return 'This action adds a new enrolment';
  }

  findAll() {
    return `This action returns all enrollments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrolment`;
  }

  update(id: number, updateEnrolmentDto: UpdateEnrolmentDto) {
    return `This action updates a #${id} enrolment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrolment`;
  }
}
