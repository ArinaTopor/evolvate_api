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
    const profile = this.profileRepository.create();
    return await this.profileRepository.save(profile);
  }
    
  async getAllProfiles() {
    return this.profileRepository.find();
  }

  async getAllDivisions() {
    return this.divisionRepository.find();
  }

  async getIdDivisionByName( name: string ) {
    const division = this.divisionRepository.findOne({where: { name }})
    return (await division).id;
  }
    
  getProfileById( user_id: number ) {
    return this.profileRepository.findOne({where: { user_id }});
  }

  async removeProfile(id: number) {
    await this.profileRepository.delete(id);
  }
}