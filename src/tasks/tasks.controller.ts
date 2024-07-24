import { Controller, Get, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService, ) {}

  @ApiOperation({summary: 'Получение всех задач'})
  @UseGuards(JwtAuthGuard)
  @Get()
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  @ApiOperation({summary: 'Получение всех категорий'})
  @UseGuards(JwtAuthGuard)
  @Get('/tags')
  findAllTags() {
    return this.tasksService.findAllTags();
  }

  @Get('/tagsCount')
  findAllIdTags() {
    return this.tasksService.countTags();
  }
}
