import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  getAll() {
      return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserByEmail(@Param('id') id: number) {
    return this.userService.getUserByEmail(id);
  }

  @Delete(':id')
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id);
  }
}
