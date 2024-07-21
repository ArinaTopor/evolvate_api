import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskTag } from './entities/tag.entity';
import { TaskTagService } from './tasks-tag.service';
import { TaskUser } from './entities/task_user';
import { TaskUserService } from './task-user.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  controllers: [TasksController],
  providers: [TasksService, TaskTagService, TaskUserService],
  imports: [TypeOrmModule.forFeature([Task, TaskTag, TaskUser]), AuthModule],
})
export class TasksModule {}
