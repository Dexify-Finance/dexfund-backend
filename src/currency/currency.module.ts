import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './entity/currency.entity';
import { CurrencyPrice } from './entity/currency_price.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Currency, CurrencyPrice]),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 15000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [CurrencyController],
  providers: [CurrencyService],
  exports: [CurrencyService]
})
export class CurrencyModule {}
