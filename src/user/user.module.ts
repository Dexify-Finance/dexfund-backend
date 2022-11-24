import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './../shared/shared.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SharedModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
