import { ConfigService } from './../config/config.service';
import { LoggingService } from './../logger/logging.service';
import { Currency } from './entities/currency.entity';
import { NestFactory } from '@nestjs/core';
import { parentPort, workerData } from 'worker_threads';
import * as needle from 'needle';
import { AppModule } from '../app.module';
import { exit } from 'process';
import { LogType } from '../shared/utility/enums';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const logger = app.get(LoggingService);
  const config = app.get(ConfigService).getConfig();

  async function fetchCoinPrices(coinList: Currency[]) {
    try {
      let idList = '';
      Object.values(coinList).forEach((item) => {
        idList += `${item.name},`;
      });
      const { body } = await needle(
        'get',
        config.BNB_PRICE_URL,
        {
          ids: idList,
          vs_currencies: 'usd',
        },
        {},
      );
      logger.log({
        type: LogType.INFO,
        message: 'Coin prices successfuly fetched',
      });
      return body;
    } catch (error) {
      logger.log({
        type: LogType.ERROR,
        message: 'Failed to fetch coin prices from CoinGecko with ' + error,
      });
      return {};
    }
  }
  parentPort.postMessage(await fetchCoinPrices(workerData));
  exit();
}

run();
