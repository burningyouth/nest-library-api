import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './interfaces/users';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findAll() {
    return this.userModel.find().exec();
  }
  findById(id: Id) {
    return this.userModel.findById(id).exec();
  }
  findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
  async create(user: CreateUserDto) {
    const newUser = new this.userModel(user);
    const save = await newUser.save();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = save.toObject();
    return rest;
  }
  update(id: Id, user: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, user).select('-password');
  }
  delete(id: Id) {
    return this.userModel.findByIdAndRemove(id).select('-password');
  }
}
