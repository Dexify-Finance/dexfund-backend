import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { TwitterModule } from './twitter/twitter.module';
import { ScheduleModule } from '@nestjs/schedule';
import { FundModule } from './fund/fund.module';
import { CurrencyModule } from './currency/currency.module';
import { Logger } from '@nestjs/common';
import { Web3Service } from './web3/web3.service';
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UserModule,
    TwitterModule,
    ScheduleModule.forRoot(),
    FundModule,
    CurrencyModule
  ],
  controllers: [AppController],
  providers: [AppService, Logger, Web3Service],
})
export class AppModule {}
