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
import { RoleName } from 'src/core/enums/roles.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>,
    @InjectModel(Role.name) private roleModel: SoftDeleteModel<RoleDocument>,
  ) {}

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    password = hashSync(password, salt);
    return password;
  }

  isValidPassword = (password: string, hash: string) => {
    return compareSync(password, hash);
  }

  updateUserToken = async (refreshToken: string, _id: string) => {
    return await this.userModel.updateOne({_id}, {refreshToken})
  }

  create = async (createUserDto: CreateUserDto, user: IUser) => {
    const isExist = await this.userModel.findOne({ email: createUserDto.email });
    if (isExist) {
      throw new BadRequestException('Email already exists');
    }
    
    const userRole = await this.roleModel.findOne({ name: createUserDto.role });

    const createdUser = await this.userModel.create({
      ...createUserDto,
      password: this.getHashPassword(createUserDto.password),
      role: userRole?._id,
      createdBy: {
        _id: user._id,
        email: user.email
      }
    });

    return {
      name: createdUser.name,
      email: createdUser.email,
      phone: createdUser?.phone,
      role: {
        _id: userRole._id,
        name: userRole.name
      },
      createdAt: createdUser.createdAt
    }
  } 

  register = async (user: RegisterUserDto) => {
    const isExist = await this.userModel.findOne({ email: user.email });
    if (isExist) {
      throw new BadRequestException('Email already exists');
    }

    const userRole = await this.roleModel.findOne({ name: RoleName.USER });

    return await this.userModel.create({
      ...user,
      password: this.getHashPassword(user.password),
      role: userRole?._id
    });
  }

  findAll = async (currentPage: number, limit: number, qs: string) => {
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
      .populate({ path: 'role', select: { _id: 1, name: 1 } })
      .select(['-password', '-refreshToken', '-__v'])
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

  findOne = async (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`User with id '${id}' not found`);
    }

    return await this.userModel.findOne({
      _id: id
    })
    .select(['-password', '-refreshToken', '-__v'])
    .populate({path: 'role', select: {_id: 1, name: 1}});
  }

  findOneByEmail = async (email: string) => {
    return await this.userModel.findOne({
      email: email
    }).populate({
      path: 'role',
      select: {name: 1},
    });
  }

  findOneByRefreshToken = async (refreshToken: string) => {
    return await this.userModel.findOne({
      refreshToken: refreshToken
    }).populate({
      path: 'role',
      select: {name: 1},
    });
  }

  update = async (id: string, updateUserDto: UpdateUserDto, user: IUser) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`User with id '${id}' not found`);
    }

    const userRole = await this.roleModel.findOne({ name: updateUserDto.role });

    const updatedUser = await this.userModel.findOneAndUpdate(
      {_id: id},
      {
        ...updateUserDto,
        role: userRole?._id,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      },
      {new : true}
    );

    return {
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser?.phone,
      role: {
        _id: userRole._id,
        name: userRole.name
      },
      updatedAt: updatedUser.updatedAt
    }
  }

  remove = async (id: string, user: IUser) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`User with id '${id}' not found`);
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
