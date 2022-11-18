import { ConfigModule } from './../config/config.module';
import { BucketService } from './services/bucket.service';
import { LoggingService } from './../logger/logging.service';
import { WalletService } from './services/wallet.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule],
  providers: [WalletService, LoggingService, BucketService],
  exports: [WalletService, BucketService],
})
export class SharedModule {}
