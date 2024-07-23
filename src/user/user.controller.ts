import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Ip, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from 'src/profile/dto/profile.dto';
import { ProfileService } from 'src/profile/profile.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserTokenDto } from './dto/user-token.dto';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, ) {}

  @ApiOperation({summary: 'Создание пользователя (для разработки)'})
  @Post()
  create(@Body() dto: CreateUserDto, ) {
    return this.userService.createUser(dto);
  }

  @Post('/token')
  createUserToken(@Body() dto: CreateUserTokenDto, @Ip() ip: string, @Headers('user-agent') userAgent: string) {
    return this.userService.createUserToken({... dto, ip: ip, user_agent: userAgent});
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

  @Get(':token')
  getUserByToken(@Param('token') token: string) {
    return this.userService.getUserByToken(token);
  }

  @Get(':user_id')
  getTokenById(@Param('user_id') user_id: number) {
    return this.userService.getTokenById(user_id);
  }

  @ApiOperation({summary: 'Удаление пользователя (для разработки)'})
  @Delete(':id')
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id);
  }
}
