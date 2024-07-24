import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserToken } from './entities/user-token.entity';
import { CreateUserTokenDto } from './dto/user-token.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { TaskAuthor } from './entities/task_author.entity';
import { UserTaskDto } from 'src/user/dto/task-user.dto';
import { TaskUser } from 'src/user/entities/task_user';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class UserService {
  constructor( @InjectRepository(User) private userRepository: Repository<User>, 
  @InjectRepository(UserToken) private userTokenRepository: Repository<UserToken>, 
  private readonly tasksService: TasksService, 
  @InjectRepository(TaskAuthor) private taskAuthorRepository: Repository<TaskAuthor>, 
  @InjectRepository(TaskUser) private taskUserRepository: Repository<TaskUser>,) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    try {    
      const user = this.userRepository.create(userDto);
      const savedUser = await this.userRepository.save(user)
      const tasks = this.tasksService.findAllTasks()
      for (const task of await(tasks)) {
        const taskAuthor = this.taskAuthorRepository.create({
            task_id: task.id,
            user_id: savedUser.id
        });
        await this.taskAuthorRepository.save(taskAuthor);
      }
      return savedUser;
    }  
    catch (error) {
      throw error;
    }
  }

  async createUserToken(userTokenDto: CreateUserTokenDto): Promise<UserToken> {
    const userToken = this.userTokenRepository.create(userTokenDto);
    return await this.userTokenRepository.save(userToken);
  }

  async createUserTask(dto: UserTaskDto): Promise<TaskUser> {
    const taskUser = this.taskUserRepository.create(dto);
    const saveUserTask = await this.taskUserRepository.save(taskUser);
    await this.updateTaskAuthorId(saveUserTask.task_id, dto.user_id, saveUserTask.id, 1);
    for( let i = 0; i < dto.emails.length; i++ ) {
      const user = this.getUserByEmail(dto.emails[i]);
      await this.updateTaskAuthorId(saveUserTask.task_id, (await user).id, saveUserTask.id, 2)
    }
    return saveUserTask;
  }

  async updateTaskAuthorId(taskId: number, userId: number, newTaskUserId: number, is_author: number) {
    const taskAuthor = await this.taskAuthorRepository.findOne({ where: { task_id: taskId, user_id: userId } });
    if (!taskAuthor) {
        throw new NotFoundException(`Task author with task ID ${taskId} and user ID ${userId} not found.`);
    }
    taskAuthor.task_user_id = newTaskUserId;
    taskAuthor.is_author = is_author;
    await this.taskAuthorRepository.save(taskAuthor);
  }

  async getUserById(id: number) {
    const user = this.userRepository.findOne({where: { id }, relations: {profile: true}})
    return user;
  }

  async getUserByToken(token: string) {
    const tokens = this.userTokenRepository.findOne({where: { token }})
    return tokens;
  }

  async getTokenById(user_id: number) {
    const userToken = this.userTokenRepository.findOne({where: { user_id }})
    return (await userToken).token;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({where: {email}})
    if(user){return user;}
    else {throw new NotFoundException(`User ${email} was not found`);}
    
  }

  async getUserIdByEmail(email: string) {
    const user = await this.userRepository.findOne({where: {email}})
    return user.id;
  }

  async removeUser(email: string) {
    await this.userRepository.delete(email);
  }
}

