import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entites/profile.entity';
import { CreateProfileDto } from './dto/profile.dto';
import { Division } from './entites/division.entity';

@Injectable() 
export class ProfileService {

  constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>, @InjectRepository(Division) private divisionRepository: Repository<Division>,) {}
    
  async createProfile(profileDto: CreateProfileDto): Promise<Profile> {
    const profile = this.profileRepository.create(profileDto);
    return await this.profileRepository.save(profile);
  }

  async getAllDivisions() {
    return this.divisionRepository.find();
  }
    
  async getProfileById( user_id: number ) {
    return this.profileRepository.findOne({where: { user_id }});
  }

  async removeProfile(email: string) {
    await this.profileRepository.delete(email);
  }
}