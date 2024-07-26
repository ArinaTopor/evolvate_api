import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Ip, Headers, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserTaskDto } from 'src/user/dto/task-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
@ApiTags('Пользователь')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, ) {}
    @ApiOperation({summary: 'Выполнение задачи'})
    @ApiConsumes('multipart/form-data')
    @UseGuards(JwtAuthGuard)
    @Post('/userTask')
    @UseInterceptors(FileInterceptor('file'))
    create(@Body() dto: UserTaskDto, @UploadedFile() file: Express.Multer.File) {
      const stringFile =  file.buffer.toString()
      if(dto.image) {
        return this.userService.createUserTask({...dto, image: stringFile} );
      }
      if(dto.video) {
        return this.userService.createUserTask({...dto, video: stringFile} );
      }
      else {
        return this.userService.createUserTask(dto);
      }    
    }
}


