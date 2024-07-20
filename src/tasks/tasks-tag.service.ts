import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskTag } from './entities/tag.entity';


@Injectable() 
export class TaskTagService {
  constructor(
    @InjectRepository(TaskTag) private taskTagRepository: Repository<TaskTag>,  ) {}

  findAllTags() {
    return this.taskTagRepository.find();
  }
}