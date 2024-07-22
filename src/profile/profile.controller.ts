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

  @ApiOperation({summary: 'Создание профиля (для разработки)'})
  @Post()
  create(@Body() dto: CreateProfileDto) {
    return this.profileService.createProfile(dto);
  }
  
  @ApiOperation({summary: 'Получение всех профилей (для разработки)'})
  @Get()
  getAll() {
    return this.profileService.getAllProfiles();
  }

  @ApiOperation({summary: 'Получение подразделений'})
  @Get('/division')
  getAllDivisions(){
    return this.profileService.getAllDivisions();
  }
  
  @ApiOperation({summary: 'Получение пользователя по почте (для разработки)'})
  @Get(':user_id')
  getUserByEmail(@Param('user_id') user_id: number) {
    return this.profileService.getProfileById(user_id);
  }
  
  @ApiOperation({summary: 'Удаление профиля (для разработки)'})
  @Delete(':id')
  removeProfile(@Param('id') id: number) {
    return this.profileService.removeProfile(id);
  }
}