import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from 'src/profile/dto/profile.dto';
import { ProfileService } from 'src/profile/profile.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly profileRepository: ProfileService) {}

  @ApiOperation({summary: 'Создание пользователя (для разработки)'})
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @ApiOperation({summary: 'Получение всех пользователей (для разработки)'})
  @Get()
  getAll() {
      return this.userService.getAllUsers();
  }

  @ApiOperation({summary: 'Получение пользлователя по id (для разработки)'})
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @ApiOperation({summary: 'Удаление пользователя (для разработки)'})
  @Delete(':id')
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id);
  }
}
