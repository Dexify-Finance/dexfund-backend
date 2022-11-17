import { LoggingService } from './../logger/logging.service';
import { WalletService } from './services/wallet.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [WalletService, LoggingService],
  exports: [WalletService],
})
export class SharedModule {}
