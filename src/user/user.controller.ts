import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Ip, Headers, UseInterceptors, UploadedFile, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserTaskDto } from 'src/user/dto/task-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { saveImageToStorage }  from 'src/user/multer.config';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, ) {}

  @ApiOperation({summary: 'Выполнение задачи'})
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post('/userTask')
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() dto: UserTaskDto, @UploadedFile() image: undefined | Express.Multer.File, @UploadedFile() video: undefined | Express.Multer.File ) {
    if(image) {
      const stringFile =  image.buffer.toString()
      return this.userService.createUserTask({...dto, image: stringFile} );
    }
    if(video) {
      const stringFile =  video.buffer.toString()
      return this.userService.createUserTask({...dto, video: stringFile} );
    }
    else {
      return this.userService.createUserTask(dto);
    }    
  }
}


