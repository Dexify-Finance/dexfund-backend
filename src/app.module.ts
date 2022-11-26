import { PriceLoggingModule } from './price-logging/price-logging.module';
import { WinstonModule } from 'nest-winston';
import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { TwitterModule } from './twitter/twitter.module';
import winstonConfig from './logger/utility/winston-config';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    WinstonModule.forRoot(winstonConfig),
    UserModule,
    TwitterModule,
    ScheduleModule.forRoot(),
    PriceLoggingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
