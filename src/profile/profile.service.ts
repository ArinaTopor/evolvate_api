import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entites/profile.entity';
import { CreateProfileDto } from './dto/profile.dto';

@Injectable() 
export class ProfileService {
    constructor(
        @InjectRepository(Profile) private profileRepository: Repository<Profile>, ) {}
    
        async createProfile(dto: CreateProfileDto) {
          const user = this.profileRepository.create(dto);
         await this.profileRepository.save(user);
      }
    
      async getAllProfiles() {
        const users = this.profileRepository.find();
        return users;
      }
    
      async getProfileById( user_id: number ) {
        const user = this.profileRepository.findOne({where: { user_id }})
        return user;
      }

      async removeProfile(id: number) {
        await this.profileRepository.delete(id);
      }
}