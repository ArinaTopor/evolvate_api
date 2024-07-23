import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskTag } from './entities/tag.entity';
import { TaskUser } from './entities/task_user';
import { UserTaskDto } from './dto/task-user.dto';
import { TaskAuthor } from 'src/user/entities/task_author.entity';


@Injectable() 
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,  
    @InjectRepository(TaskTag) private taskTagRepository: Repository<TaskTag>, 
    @InjectRepository(TaskUser) private taskUserRepository: Repository<TaskUser>, @InjectRepository(TaskAuthor) private taskAuthorRepository: Repository<TaskAuthor>) {}

  async findAllTasks(): Promise<Task[]>{
    return this.taskRepository.find();
  }

  async findAllTags() {
    return this.taskTagRepository.find();
  }

  async createUserTask(dto: UserTaskDto): Promise<TaskUser> {
    const taskUser = this.taskUserRepository.create(dto);
    const author = this.getTaskAuthorId(taskUser.task_id, dto.user_id);
    const saveUserTask = await this.taskUserRepository.save(taskUser);
    await this.updateTaskAuthorId(saveUserTask.task_id, dto.user_id, saveUserTask.id);
    return saveUserTask;
  }

  async updateTaskAuthorId(taskId: number, userId: number, newTaskUserId: number) {
    const taskAuthor = await this.taskAuthorRepository.findOne({ where: { task_id: taskId, user_id: userId } });
    if (!taskAuthor) {
        throw new NotFoundException(`Task author with task ID ${taskId} and user ID ${userId} not found.`);
    }
    taskAuthor.task_user_id = newTaskUserId;
    await this.taskAuthorRepository.save(taskAuthor);
  }


  async getAllTasksUser() {
      return this.taskUserRepository.find();
  }

  async getTaskAuthorId(task_id: number, user_id: number) {
    const user = this.taskAuthorRepository.findOne({where: { task_id, user_id }})
    return user;

  }
}
