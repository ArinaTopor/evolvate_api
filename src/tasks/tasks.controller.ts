import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskTagService } from './tasks-tag.service';
import { TaskUserService } from './task-user.service';
import { UserTaskDto } from './dto/task-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService, private readonly taskTagService: TaskTagService, private readonly taskUserService: TaskUserService) {}

  //Выполнение задачи
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: UserTaskDto) {
    return this.taskUserService.createUserTask(dto);
  }

  //Получение всех задач
  @UseGuards(JwtAuthGuard)
  @Get()
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  //Получение всех категорий
  @UseGuards(JwtAuthGuard)
  @Get('/tag')
  findAllTags() {
    return this.taskTagService.findAllTags();
  }

  @Get('/task_user')
  getAllTasksUser() {
    return this.taskUserService.getAllTasksUser();
  }
}
