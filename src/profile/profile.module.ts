import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entites/profile.entity';
import { User } from 'src/user/entities/user.entity';
import { Division } from './entites/division.entity';




@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [TypeOrmModule.forFeature([Profile, User, Division])],
  exports: [ProfileService]
})
export class ProfileModule {}