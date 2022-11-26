import { Price } from './entities/price.entity';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PriceLoggingService } from './price-logging.service';

@ApiTags('Currency price')
@Controller('price')
export class PriceLoggingController {
  constructor(private readonly priceLoggingService: PriceLoggingService) {}

  @Get()
  getCurrentPrice(
    @Query('id') id: string,
    @Query('timeStamp') timeStamp: number,
  ): Promise<Price> {
    return this.priceLoggingService.getCurrentPrice(id, timeStamp);
  }

  @Get('history')
  getPriceHistory(
    @Query('ids') ids: string,
    @Query('startDate') startDate: number,
    @Query('endDate') endDate: number,
  ) {
    return this.priceLoggingService.getPriceHistory(ids, startDate, endDate);
  }
}
