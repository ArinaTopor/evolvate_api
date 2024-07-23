import { forwardRef, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskTag } from './entities/tag.entity';
import { TaskUser } from './entities/task_user';
import { AuthModule } from 'src/auth/auth.module';
import { TaskAuthor } from '../user/entities/task_author.entity';
import { UserModule } from 'src/user/user.module';


@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [TypeOrmModule.forFeature([Task, TaskTag, TaskUser, TaskAuthor]), AuthModule, forwardRef(() => UserModule)],
  exports: [TasksService]
})
export class TasksModule {}
