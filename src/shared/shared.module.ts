import { ConfigModule } from './../config/config.module';
import { BucketService } from './services/bucket.service';
import { WalletService } from './services/wallet.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [WalletService, BucketService],
  exports: [WalletService, BucketService],
})
export class SharedModule {}
