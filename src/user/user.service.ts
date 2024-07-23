import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserToken } from './entities/user-token.entity';
import { CreateUserTokenDto } from './dto/user-token.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { TaskAuthor } from './entities/task_author.entity';

@Injectable()
export class UserService {

  constructor( @InjectRepository(User) private userRepository: Repository<User>, @InjectRepository(UserToken) private userTokenRepository: Repository<UserToken>, 
  private readonly tasksService: TasksService, @InjectRepository(TaskAuthor) private taskAuthorRepository: Repository<TaskAuthor>) {}


  async createUser(userDto: CreateUserDto): Promise<User> {
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

  async createUserToken(userTokenDto: CreateUserTokenDto): Promise<UserToken> {
    const userToken = this.userTokenRepository.create(userTokenDto);
    return await this.userTokenRepository.save(userToken);
  }

  async getAllUsers() {
    return this.userRepository.find({relations: {profile: true}});
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
    return user;
  }

  async removeUser(id: number) {
    await this.userRepository.delete(id);
  }
}

