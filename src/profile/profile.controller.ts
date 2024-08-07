import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

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