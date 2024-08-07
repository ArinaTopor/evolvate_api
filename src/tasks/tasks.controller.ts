import { Controller, Get, Param, UseGuards } from '@nestjs/common';
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

  @ApiOperation({summary: 'Получение количества категорий'})
  @UseGuards(JwtAuthGuard)
  @Get('/tagsCount')
  findAllIdTags() {
    return this.tasksService.countTags();
  }

  @ApiOperation({summary: 'Получение задачи по ID'})
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }
}
