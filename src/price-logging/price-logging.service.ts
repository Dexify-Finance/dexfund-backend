import { LoggingService } from './../logger/logging.service';
import { Currency } from './entities/currency.entity';
import { ConfigService } from './../config/config.service';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Price } from './entities/price.entity';
import { LogType } from 'src/shared/utility/enums';
import * as needle from 'needle';

@Injectable()
export class PriceLoggingService {
  constructor(
    @InjectRepository(Price)
    private priceRepository: Repository<Price>,
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
    private configService: ConfigService,
    private logger: LoggingService,
  ) {}
  config = this.configService.getConfig();

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    await this.savePrice();
  }

  async savePrice() {
    try {
      const coinList = await this.currencyRepository.find();
      const prices = await this.fetchCoinPrices(coinList);
      const timeId = Math.floor(
        Date.now() / this.config.BNB_PRICE_TIME_INTERVAL,
      );
      const queryValue = [];
      Object.values(coinList).forEach((item) => {
        queryValue.push({
          currency: item.id,
          price: prices[item.name].usd,
          timeId,
        });
      });
      await this.priceRepository
        .createQueryBuilder()
        .insert()
        .into(Price)
        .values(queryValue)
        .execute();
      this.logger.log({
        type: LogType.INFO,
        message: 'Coin prices successfuly saved',
      });
    } catch (error) {
      this.logger.log({
        type: LogType.ERROR,
        message: 'Failed to save coin prices from CoinGecko with ' + error,
      });
    }
  }

  private async fetchCoinPrices(coinList: Currency[]) {
    try {
      let idList = '';
      Object.values(coinList).forEach((item) => {
        idList += `${item.name},`;
      });
      console.log(this.config.BNB_PRICE_URL);
      const { body } = await needle(
        'get',
        this.config.BNB_PRICE_URL,
        {
          ids: idList,
          vs_currencies: 'usd',
        },
        {},
      );
      return body;
    } catch (error) {
      this.logger.log({
        type: LogType.ERROR,
        message: 'Failed to fetch coin prices from CoinGecko with ' + error,
      });
      return {};
    }
  }

  async getCurrentPrice(id: string, timeStamp: number) {
    const timeId = Math.floor(timeStamp / this.config.BNB_PRICE_TIME_INTERVAL);
    const loggedPrice = await this.priceRepository.findOneBy({ timeId });
    return loggedPrice;
  }
}
