import { LoggingService } from './../logger/logging.service';
import { LoggingModule } from './../logger/logging.module';
import { ConfigModule } from './../config/config.module';
import { BucketService } from './services/bucket.service';
import { WalletService } from './services/wallet.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule, LoggingModule],
  providers: [WalletService, BucketService, LoggingService],
  exports: [WalletService, BucketService, LoggingService],
})
export class SharedModule {}
