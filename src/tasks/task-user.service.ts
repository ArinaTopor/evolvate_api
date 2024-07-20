import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskTag } from './entities/tag.entity';
import { TaskUser } from './entities/task_user';
import { UserTaskDto } from './dto/task-user.dto';


@Injectable() 
export class TaskUserService {
    constructor( @InjectRepository(TaskUser) private taskUserRepository: Repository<TaskUser> ) {}
    
    async createUserTask(dto: UserTaskDto): Promise<TaskUser> {
        const taskUser = this.taskUserRepository.create(dto);
        return await this.taskUserRepository.save(taskUser);
    }

    async getAllTasksUser() {
        return this.taskUserRepository.find();
    }
}