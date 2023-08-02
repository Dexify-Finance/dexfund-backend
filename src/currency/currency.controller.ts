import { Controller, Get, Param, Query } from '@nestjs/common';
import { getIntervalForTimeRange } from 'src/utils/helper';
import { CurrencyService } from './currency.service';
import { CurrencyHistoryDto } from './dto/currencyHistory.dto';
import { CurrencyPriceDto } from './dto/currency-price.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Currency')
@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  // @Get(':id/history')
  // getCurrencyPriceHistory(@Param('id') id: string, @Query() query: CurrencyHistoryDto) {
  //   return this.currencyService.getCurrencyPriceHistory(id, Number(query.from), Number(query.to), getIntervalForTimeRange(query.interval));
  // }

  // @Get('/eth-price')
  // getEthPrice() {
  //   return this.currencyService.getCurrentEthPrice();
  // }

  // @Get('/monthly-eth-prices')
  // getMonthlyEthPrices() {
  //   return this.currencyService.getSavedMonthlyEthPrices();
  // }

  @Get('/currencies')
  getAllCurrencies() {
    return this.currencyService.getAllCurrencies();
  }

  @Get(':address/history')
  async getPriceHistory(@Param('address') address: string, @Query() query: CurrencyHistoryDto) {
    return this.currencyService.getCurrencyPriceHistory(address, query.from, query.to, query.interval);
  }

  @Get(':address/price')
  getCurrencyPrice(@Param('address') address: string, @Query() query: CurrencyPriceDto) {
    return this.currencyService.getPrice(address, query.timestamp);
  }
}
