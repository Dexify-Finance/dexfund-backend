import { WinstonModule } from 'nest-winston';
import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import winstonConfig from './shared/logger/winston-config';

@Module({
  imports: [ConfigModule, DatabaseModule, WinstonModule.forRoot(winstonConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
