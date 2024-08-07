import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserTaskDto } from 'src/user/dto/task-user.dto';
import { saveMediaToStorage } from './multer.config';
import { FormDataRequest } from 'nestjs-form-data';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, ) {}

  @ApiOperation({summary: 'Выполнение задачи'})
  @UseGuards(JwtAuthGuard)
  @FormDataRequest()
  @Post('/userTask')
  async create(@Body() dto: UserTaskDto) { 
    if(dto.image) {
      const image = await saveMediaToStorage(dto.image, "image");
      return this.userService.createUserTask({...dto, image: image});
    }
    if(dto.video) {
      const video = await saveMediaToStorage(dto.video, "video");
      return this.userService.createUserTask({...dto, video: video });
    }
    else {
      return this.userService.createUserTask({...dto});
    }
  }
}

