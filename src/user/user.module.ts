import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/profile/entites/profile.entity';
import { ProfileModule } from 'src/profile/profile.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserToken } from './entities/user-token.entity';
import { TasksModule } from 'src/tasks/tasks.module';
import { TaskAuthor } from './entities/task_author.entity';
import { TaskUser } from 'src/user/entities/task_user';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User, Profile, UserToken, TaskAuthor, TaskUser]), 
  ProfileModule, forwardRef(() => AuthModule), forwardRef(() => TasksModule)],
  exports: [UserService]
})
export class UserModule {}
