import { Body, Injectable, Patch } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';
import { UpdateUserDto } from './UpdateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  getUsers() {
    return this.usersModel.find();
  }

  getUser(id: number) {
    return this.usersModel.findById(id);
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }
}
