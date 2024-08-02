import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './UpdateUser.dto';
import mongoose from 'mongoose';

@Controller(['users'])
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid id', 400);
    return this.userService.getUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid id', 400);
    // check if the provided favorites array has the correct structure
    if (
      !Array.isArray(updateUserDto.favorites) ||
      updateUserDto.favorites.some(
        (favorite) =>
          typeof favorite.id !== 'number' ||
          typeof favorite.brand !== 'string' ||
          typeof favorite.model !== 'string',
      )
    ) {
      throw new HttpException(
        'Favorites should be an array of objects with id, brand and model',
        400,
      );
    }
    return this.userService.updateUser(id, updateUserDto);
  }
}
