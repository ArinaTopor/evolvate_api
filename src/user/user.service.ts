import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, private profileRepository: ProfileService ) {}

    async createUser(dto: CreateUserDto) {
      const user = this.userRepository.create(dto);
      const profil = this.profileRepository.getProfileById(user.id)
    await this.userRepository.save(user);
  }

  async getAllUsers() {
    const users = this.userRepository.find();
    return users;
  }

  async getUserByEmail(id: number) {
    const user_ = this.userRepository.findOne({where: { id }})
    const profil = this.profileRepository.getProfileById((await user_).id)
    return [user_, profil];
  }

  async removeUser(id: number) {
    await this.userRepository.delete(id);
  }
}

