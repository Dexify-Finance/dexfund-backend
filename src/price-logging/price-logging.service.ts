import { LoggingService } from './../logger/logging.service';
import { Currency } from './entities/currency.entity';
import { ConfigService } from './../config/config.service';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Price } from './entities/price.entity';
import { LogType } from 'src/shared/utility/enums';
import { Worker } from 'worker_threads';

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

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    const coinList = await this.currencyRepository.find();
    const worker = new Worker(__dirname + '/worker.js', {
      workerData: coinList,
    });
    worker.on('message', (message) => {
      this.savePrice(message, coinList);
    });
    worker.on('error', (e) => {
      this.logger.log({
        type: LogType.ERROR,
        message: 'Error in Worker' + e,
      });
    });
    worker.on('exit', (code) => {
      this.logger.log({
        type: LogType.WARN,
        message: 'Worker terminated with code: ' + code,
      });
    });
  }

  async savePrice(prices: any, coinList: Currency[]) {
    try {
      const timeId = Math.floor(
        Date.now() / this.config.BNB_PRICE_TIME_INTERVAL,
      );
      const queryValue = [];
      Object.values(coinList).forEach((item) => {
        queryValue.push({
          currency: item.id,
          price: prices[item.name].usd,
          timeStamp: Date.now(),
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

  async getCurrentPrice(id: string, timeStamp: number) {
    const timeId = Math.floor(timeStamp / this.config.BNB_PRICE_TIME_INTERVAL);
    return await this.priceRepository.findOne({
      where: {
        timeId,
        currency: {
          name: id,
        },
      },
      relations: {
        currency: true,
      },
    });
  }

  async getPriceHistory(ids: string, startDate: number, endDate: number) {
    endDate = Date.now() - endDate < 0 ? Date.now() : endDate;
    const offset = Math.floor(
      (Date.now() - endDate) / this.config.BNB_PRICE_TIME_INTERVAL,
    );
    const limit = Math.floor(
      (endDate - startDate) / this.config.BNB_PRICE_TIME_INTERVAL,
    );
    console.log(offset);
    const result = {};
    const coinList = ids.split(',');
    for (const key in coinList) {
      result[coinList[key]] = await this.priceRepository.find({
        relations: {
          currency: true,
        },
        where: {
          currency: {
            name: coinList[key],
          },
        },
        skip: offset,
        take: limit,
      });
    }
    return result;
  }
}
