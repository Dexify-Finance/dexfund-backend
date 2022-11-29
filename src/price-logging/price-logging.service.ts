import { LoggingService } from './../logger/logging.service';
import { Currency } from './entities/currency.entity';
import { ConfigService } from './../config/config.service';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
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
    private readonly configService: ConfigService,
    private readonly logger: LoggingService,
  ) {}
  config = this.configService.getConfig();

  @Cron(CronExpression.EVERY_30_MINUTES)
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
      const queryValue = [];
      Object.values(coinList).forEach((item) => {
        queryValue.push({
          currency: item.id,
          price: prices[item.name]?.usd,
          timeStamp: Date.now(),
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

  async getCurrentPrice(id: string) {
    return await this.priceRepository.findOne({
      where: {
        currency: {
          name: id,
        },
      },
      order: {
        timeStamp: 'DESC',
      },
      relations: {
        currency: true,
      },
    });
  }

  async getPriceHistory(
    ids: string,
    startDate: number,
    endDate: number,
    interval: number,
  ) {
    const dataCnt = Math.floor((endDate - startDate) / interval + 1);
    const chunk = Math.floor(interval / this.config.BNB_PRICE_TIME_INTERVAL);
    const result = {};
    const coinList = ids.split(',');
    for (const val of coinList) {
      const priceArray = await this.priceRepository.find({
        relations: {
          currency: true,
        },
        order: {
          timeStamp: 'DESC',
        },
        where: {
          currency: {
            name: val,
          },
          timeStamp: Between(
            startDate - this.config.BNB_PRICE_TIME_INTERVAL,
            endDate,
          ),
        },
      });
      let i = 0;
      const data = [];
      while (i < dataCnt) {
        if (priceArray[i * chunk]?.price) data.push(priceArray[i * chunk]);
        i++;
      }
      result[val] = data;
    }
    return result;
  }
}
