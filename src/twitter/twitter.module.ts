import { ConfigModule } from './../config/config.module';
import { SharedModule } from './../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Twitter } from './entities/twitter.entity';
import { Module } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { TwitterController } from './twitter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Twitter]), ConfigModule, SharedModule],
  controllers: [TwitterController],
  providers: [TwitterService],
})
export class TwitterModule {}
