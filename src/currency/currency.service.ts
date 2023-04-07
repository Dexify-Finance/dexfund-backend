import { Injectable, Logger } from '@nestjs/common';
import { AssetDto } from 'src/graphql/dto/asset';
import { GraphqlService } from 'src/graphql/graphql.service';
import { START_YEAR, TimeRange } from 'src/utils/constants';
import { getIntervalForTimeRange } from 'src/utils/helper';
import { Worker } from 'worker_threads';
import { AssetPriceHistory, EthPriceHistory, MonthlyEthPriceHistory, TimeData } from './worker/worker';
import { FundDto } from 'src/graphql/dto/fund';
import { CurrencyPriceDto } from 'src/graphql/dto/currency';

@Injectable()
export class CurrencyService {
  private readonly logger = new Logger(CurrencyService.name);
  ethPriceHistories: EthPriceHistory;
  monthlyEthPriceHistories: MonthlyEthPriceHistory;
  timeData: TimeData;
  assets: AssetDto[];
  assetPriceHistories: AssetPriceHistory[];
  currentEthPrice: string;
  allFunds: (FundDto & {aum1WAgo: number})[];
  
  constructor(private readonly graphqlSerivce: GraphqlService) {}

  startWorkerThread() {
    this.runWorker();
  }

  private runWorker() {
    const worker = new Worker(`${__dirname}/worker/worker.js`, {
      workerData: {},
    });
    worker.on('message', (result: {
      timeData: TimeData,
      currentEthPrice: string,
      ethPriceHistories: EthPriceHistory,
      assets: AssetDto[],
      assetPriceHistories: AssetPriceHistory[],
      monthlyEthPrices: MonthlyEthPriceHistory,
      allFunds: (FundDto & {aum1WAgo: number})[]
    }) => {
      this.timeData = result.timeData;
      this.currentEthPrice = result.currentEthPrice;
      this.ethPriceHistories = result.ethPriceHistories;
      this.assets = result.assets;
      this.assetPriceHistories = result.assetPriceHistories;
      this.monthlyEthPriceHistories = result.monthlyEthPrices;
      this.allFunds = result.allFunds;
    });
    worker.on('exit', (code) => {
    });
    worker.on('error', (e) => {
      this.logger.warn(`Ohlc worker thread error, ${e.stack}`);
    });
  }

  async getCurrencyPriceHistory(
    id: string,
    from: number,
    to: number,
    interval: number,
  ) {
    return this.graphqlSerivce.getCurrencyPriceHistory(id, from, to, interval);
  }

  async getAssetPriceHistory(
    id: string,
    from: number,
    to: number,
    interval: number
  ) {
    return this.graphqlSerivce.getAssetPriceHistory(id, from, to, interval);
  }

  async getAssets() {
    return this.graphqlSerivce.getAssets();
  }

  async getCurrentEthPrice() {
    const eth = await this.graphqlSerivce.getCurrency('ETH');
    return eth.price.price;
  }

  getEthPriceAt(timestamp: string, timeRange: string) {
    const history = this.ethPriceHistories[timeRange];
    const prices = history[`price_history_${timestamp}`];
    return prices[0].price;
  }

  async getMonthlyEthPrices() {
    return this.graphqlSerivce.getMonthlyEthPrices();
  }

  async getSavedMonthlyEthPrices() {
    const currentYear = new Date().getUTCFullYear();
    const currentMonth = new Date().getUTCMonth();

    const priceHistory = [];
    for (let i = START_YEAR; i <= currentYear; i ++) {
      for (let j = 0; j < 12; j ++) {
        const timestamp = new Date(`${i}-${j + 1}`).getTime() / 1000;
        const prices = this.monthlyEthPriceHistories[`price_history_${timestamp}`];
        const price = prices?.[0]?.price;
        if (price) {
          priceHistory.push({
            year: i,
            month: j,
            timestamp: timestamp,
            price: Number(price)
          });
        }

        if (i === currentYear && j === currentMonth) {
          break;
        }
      }
    }

    return priceHistory;
  }
}
