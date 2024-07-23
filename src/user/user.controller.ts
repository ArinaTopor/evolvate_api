import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Ip, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserTokenDto } from './dto/user-token.dto';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {}


