import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskTag } from './entities/tag.entity';


@Injectable() 
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task> ) {}

  findAll() {
    return this.taskRepository.find();
  }
}
