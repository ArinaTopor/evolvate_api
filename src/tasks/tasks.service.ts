import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskTag } from './entities/tag.entity';


@Injectable() 
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,  
    @InjectRepository(TaskTag) private taskTagRepository: Repository<TaskTag>, ) {}

  async findAllTasks(): Promise<Task[]>{
    return this.taskRepository.find();
  }

  async findAllTags() {
    return this.taskTagRepository.find();
  }

  async getTagIds() {
    const tags = this.findAllTags();
    const ids = [];
    for (const task of await(tags)){
      ids.push(task.id);
    }
    return ids;
  }
  
  async countTags() {
    const tagIds = this.getTagIds();
    const p = [];
    for (const id of await(tagIds)){
      const query = this.taskRepository.createQueryBuilder('Task');
      query.where('tag_id = :tagId', { tagId: id });
      const count = await query.getCount();
      p.push({id, count})
    }
    return p;
  }
}
