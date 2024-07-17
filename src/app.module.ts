import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { TaskTag } from './tasks/entities/tag.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entites/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'evo',
      entities: [User , Task, TaskTag, Profile],
      synchronize: false,
    }),
    UserModule,
    TasksModule,
    ProfileModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
