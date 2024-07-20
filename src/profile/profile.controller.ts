import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/profile.dto';
import { Profile } from './entites/profile.entity';


  
  @Controller('profile')
  export class ProfileController {
    constructor(private readonly profileService: ProfileService, ) {}

    @Post()
    create(@Body() dto: CreateProfileDto) {
      return this.profileService.createProfile(dto);
    }
  
    @Get()
    getAll() {
      return this.profileService.getAllProfiles();
    }

    @Get('/division')
    getAllDivisions(){
      return this.profileService.getAllDivisions();
    }

    @Get('/division_name')
    getIdDivisionByName(@Param('name') name: string){
      return this.profileService.getIdDivisionByName(name);
    }
  
    @Get(':user_id')
    getUserByEmail(@Param('user_id') user_id: number) {
      return this.profileService.getProfileById(user_id);
    }
  
    @Delete(':id')
    removeProfile(@Param('id') id: number) {
      return this.profileService.removeProfile(id);
    }
  }