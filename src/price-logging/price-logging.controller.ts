import { Price } from './entities/price.entity';
import { Controller, Get, Patch, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PriceLoggingService } from './price-logging.service';

@ApiTags('Currency price')
@Controller('price')
export class PriceLoggingController {
  constructor(private readonly priceLoggingService: PriceLoggingService) {}

  @Get()
  getCurrentPrice(@Query('id') id: string): Promise<Price> {
    return this.priceLoggingService.getCurrentPrice(id);
  }

  @Patch()
  initializeCurrencyPrice(): Promise<boolean> {
    return this.priceLoggingService.initializeCurrencyPrice();
  }

  @Get('history')
  getPriceHistory(
    @Query('ids') ids: string,
    @Query('startDate') startDate: number,
    @Query('endDate') endDate: number,
    @Query('interval') interval: number,
  ) {
    return this.priceLoggingService.getPriceHistory(
      ids,
      startDate,
      endDate,
      interval,
    );
  }
}
