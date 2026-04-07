import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './users.interface';
import aqp from 'api-query-params';
import { Role, RoleDocument } from 'src/modules/roles/schemas/role.schema';
import { USER_ROLE } from 'src/databases/sample';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>,
    @InjectModel(Role.name) private roleModel: SoftDeleteModel<RoleDocument>,
  ) {}

  getHashPassword=(password: string) => {
    const salt = genSaltSync(10);
    password = hashSync(password, salt);
    return password;
  }

  isValidPassword=(password: string, hash: string) => {
    return compareSync(password, hash);
  }

  updateUserToken = async (refreshToken: string, _id: string) => {
    return await this.userModel.updateOne({_id}, {refreshToken})
  }

  async create(createUserDto: CreateUserDto, user: IUser) {
    createUserDto.password = this.getHashPassword(createUserDto.password);
    return await this.userModel.create({
      ...createUserDto,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    });
  } 

  register = async (user: RegisterUserDto) => {
    const isExist = await this.userModel.findOne({ email: user.email });
    if (isExist) {
      throw new BadRequestException('Email already exists');
    }

    const userRole = await this.roleModel.findOne({ name: USER_ROLE });

    return await this.userModel.create({
      ...user,
      password: this.getHashPassword(user.password),
      role: userRole?._id
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
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

  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return "user not found";
    }

    return this.userModel.findOne({
      _id: id
    })
    .select("-password")
    .populate({path: 'role', select: {_id: 1, name: 1}});
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({
      email: email
    }).populate({
      path: 'role',
      select: {name: 1},
    });
  }

  findOneByRefreshToken(refreshToken: string) {
    return this.userModel.findOne({
      refreshToken: refreshToken
    }).populate({
      path: 'role',
      select: {name: 1},
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return "user not found";
    }

    return await this.userModel.updateOne(
      {_id: id},
      {
        ...updateUserDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    )
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return "user not found";
    }

    const foundUser = await this.userModel.findById(id);
    if(foundUser && foundUser.email === "admin@gmail.com") {
      throw new BadRequestException("You can not delete admin account");
    }

    await this.userModel.updateOne(
      {_id: id},
      {
        deletedBy: {
          _id: user._id,
          email: user.email
        }
      }
    )

    return this.userModel.softDelete({
      _id: id
    });
  }
}
