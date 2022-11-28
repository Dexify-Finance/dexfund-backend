import { AxiosError } from 'axios';
import { ConfigService } from './../config/config.service';
import { LoggingService } from './../logger/logging.service';
import { Currency } from './entities/currency.entity';
import { NestFactory } from '@nestjs/core';
import { parentPort, workerData } from 'worker_threads';
import { AppModule } from '../app.module';
import { exit } from 'process';
import { LogType } from '../shared/utility/enums';
import { catchError, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const logger = app.get(LoggingService);
  const config = app.get(ConfigService).getConfig();
  const httpService = app.get(HttpService);

  async function fetchCoinPrices(coinList: Currency[]) {
    try {
      let idList = '';
      Object.values(coinList).forEach((item) => {
        idList += `${item.name},`;
      });
      const { data } = await lastValueFrom(
        httpService
          .get(`${config.BNB_PRICE_URL}?ids=${idList}&vs_currencies=usd`)
          .pipe(
            catchError((error: AxiosError) => {
              logger.log({
                type: LogType.ERROR,
                message:
                  'Failed to fetch coin prices from CoinGecko with ' + error,
              });
              throw 'An error happened!';
            }),
          ),
      );
      logger.log({
        type: LogType.INFO,
        message: 'Coin prices successfuly fetched',
      });
      return data;
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
