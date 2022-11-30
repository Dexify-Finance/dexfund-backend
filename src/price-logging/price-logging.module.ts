import { HttpModule } from '@nestjs/axios';
import { Currency } from './entities/currency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './../shared/shared.module';
import { ConfigModule } from './../config/config.module';
import { Module } from '@nestjs/common';
import { PriceLoggingService } from './price-logging.service';
import { PriceLoggingController } from './price-logging.controller';
import { Price } from './entities/price.entity';

@Module({
  imports: [
    ConfigModule,
    SharedModule,
    TypeOrmModule.forFeature([Price, Currency]),
    HttpModule,
  ],
  controllers: [PriceLoggingController],
  providers: [PriceLoggingService],
})
export class PriceLoggingModule {}
