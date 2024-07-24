import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Ip, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserTokenDto } from './dto/user-token.dto';
import { UserTaskDto } from 'src/user/dto/task-user.dto';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, ) {}
    @ApiOperation({summary: 'Выполнение задачи'})
    @UseGuards(JwtAuthGuard)
    @Post('/userTask')
    create(@Body() dto: UserTaskDto) {
      return this.userService.createUserTask(dto);
    }
}


