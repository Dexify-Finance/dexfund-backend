import { User } from './../user/entities/user.entity';
import { ConfigModule } from './../config/config.module';
import { SharedModule } from './../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { TwitterController } from './twitter.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule,
    SharedModule,
    HttpModule,
  ],
  controllers: [TwitterController],
  providers: [TwitterService],
})
export class TwitterModule {}
