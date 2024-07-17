import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/profile.dto';

  
  @Controller('profile')
  export class ProfileController {
    constructor(private readonly userService: ProfileService) {}

    @Post()
    create(@Body() dto: CreateProfileDto) {
      return this.userService.createProfile(dto);
    }
  
    @Get()
    getAll() {
        return this.userService.getAllProfiles();
    }
  
    @Get(':user_id')
    getUserByEmail(@Param('user_id') user_id: number) {
      return this.userService.getProfileById(user_id);
    }
  
    @Delete(':id')
    removeProfile(@Param('id') id: number) {
      return this.userService.removeProfile(id);
    }
  }