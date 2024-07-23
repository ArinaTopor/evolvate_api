import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { TaskTag } from './tasks/entities/tag.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entites/profile.entity';
import { AuthModule } from './auth/auth.module';
import { TaskUser } from './tasks/entities/task_user';
import { ProductModule } from './products/products.model';
import { Product } from './products/entity/products.entity';
import { ProductImage } from './products/entity/product-image.entity';
import { Division } from './profile/entites/division.entity';
import { Variant } from './products/entity/variant.entity';
import { Cart } from './products/entity/cart.entity';
import { UserToken } from './user/entities/user-token.entity';
import { TaskAuthor } from './user/entities/task_author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'evo',
      entities: [User , Task, TaskTag, Profile, TaskUser, Product, ProductImage, Division, Variant, Cart, UserToken, TaskAuthor],
      synchronize: false,
    }),
    UserModule,
    TasksModule,
    ProfileModule, 
    AuthModule, 
    ProductModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
