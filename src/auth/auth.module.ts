import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [  forwardRef(() => UserModule),
    JwtModule.register({
        secret: process.env.KEY || 'Secret',
    }), ProfileModule
  ],
  exports: [ AuthService, JwtModule ]
})
export class AuthModule {}