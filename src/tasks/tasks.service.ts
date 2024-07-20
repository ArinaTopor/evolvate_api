import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskTag } from './entities/tag.entity';


@Injectable() 
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>, ) {}

  findAllTasks() {
    return this.taskRepository.find();
  }
}
