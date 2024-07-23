import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
  import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/profile.dto';
import { Profile } from './entites/profile.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Профиль') 
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService, ) {}

  @ApiOperation({summary: 'Получение подразделений'})
  @Get('/division')
  getAllDivisions(){
    return this.profileService.getAllDivisions();
  }
}