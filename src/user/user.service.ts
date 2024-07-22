import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ProfileService } from 'src/profile/profile.service';
import { CreateProfileDto } from 'src/profile/dto/profile.dto';
import { Profile } from 'src/profile/entites/profile.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, @InjectRepository(Profile) private profileRepository: Repository<Profile> ) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(userDto);
    return await this.userRepository.save(user);
  }

  async getAllUsers() {
    return this.userRepository.find({relations: {profile: true}});
  }

  async getUserById(id: number) {
    const user = this.userRepository.findOne({where: { id }, relations: {profile: true}})

    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({where: {email}})
    return user;
  }

  async removeUser(id: number) {
    await this.userRepository.delete(id);
  }
}

