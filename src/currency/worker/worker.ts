import { ConfigService } from '../../config/config.service';
import { NestFactory } from '@nestjs/core';
import { parentPort, workerData } from 'worker_threads';
import { AppModule } from '../../app.module';
import { async, catchError, lastValueFrom } from 'rxjs';
import { FETCH_INTERVAL, TimeRange } from 'src/utils/constants';
import { getIntervalForTimeRange, getTimeForTimeRange } from 'src/utils/helper';
import { CurrencyService } from '../currency.service';
import { INestApplicationContext } from '@nestjs/common/interfaces/nest-application-context.interface';
import { AssetDto } from 'src/graphql/dto/asset';
import { AssetPriceDto } from 'src/graphql/dto/assetPrice';
import { CurrencyDto, CurrencyPriceDto } from 'src/graphql/dto/currency';
import { GraphqlService } from 'src/graphql/graphql.service';
import { FundDto } from 'src/graphql/dto/fund';
import { FundOverviewWithHistoryResponse } from 'src/fund/dto/fund.dto';
import { FundService } from 'src/fund/fund.service';
import { FundCategoryType } from 'src/fund/entity/fund.entity';

export type TimeData = {
  [key: string]: {
    from: number;
    to: number;
    interval: number;
  };
};

export type AssetPriceHistory = {
  asset: string;
  history: {
    timeRange: string;
    history: AssetDto[];
  }[];
};

export type EthPriceHistory = {
  [key: string]: {
    [key: string]: CurrencyPriceDto[];
  };
};

export type MonthlyEthPriceHistory = {
  [key: string]: CurrencyPriceDto[];
};

// Fetch eth price history and other coins price history intervally

let app: INestApplicationContext;
let currencyService: CurrencyService;
let graphqlService: GraphqlService;
let fundService: FundService;
let isBusy: boolean;

const normalizationTime = (timeRange: string) => {
  const current = Math.floor(new Date().getTime() / 1000);
  const time = getTimeForTimeRange(timeRange);
  const interval = getIntervalForTimeRange(timeRange);

  const to = current - (current % 60);
  const from = to - Math.ceil(time / interval) * interval;

  return { from, to, interval };
};

const getNormalizedTimes = (): TimeData => {
  const data = {};
  Object.entries(TimeRange).map(([key, value]) => {
    const timeRange = value;
    const { from, to, interval } = normalizationTime(timeRange);
    data[value] = {
      from,
      to,
      interval,
    };
  });

  return data;
};

const getEthPriceHistory = async (
  from: number,
  to: number,
  interval: number,
) => {
  return await currencyService.getCurrencyPriceHistory(
    'ETH',
    from,
    to,
    interval,
  );
};

const getEthPriceHistories = async (timeData: TimeData) => {
  const ethPriceHistories = {};
  const times = Object.entries(TimeRange);

  for (let i = 0; i < times.length; i++) {
    const time = timeData[times[i][1]];
    const ethPriceHistory = await getEthPriceHistory(
      time.from,
      time.to,
      time.interval,
    );
    ethPriceHistories[times[i][1]] = ethPriceHistory;
  }
  // await Promise.all(
  //   Object.entries(TimeRange).map(async ([key, value], index) => {
  //     const time = timeData[value];
  //     const ethPriceHistory = await getEthPriceHistory(
  //       time.from,
  //       time.to,
  //       time.interval,
  //     );
  //     ethPriceHistories[value] = ethPriceHistory;
  //   }),
  // );

  return ethPriceHistories;
};

const getAssetPriceHistories = async (
  assets: AssetDto[],
  timeData: TimeData,
) => {
  const assetPriceHistories: AssetPriceHistory[] = [];

  console.log('start fetching asset prices: ', new Date().getTime());
  let entries = Object.entries(TimeRange);
  for (let j = 0; j < assets.length; j++) {
    const histories: {
      timeRange: string;
      history: AssetDto[];
    }[] = [];
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      const time = timeData[entry[1]];
      const assetsPriceHistory = await currencyService.getAssetPriceHistory(
        assets[j].id,
        time.from,
        time.to,
        time.interval,
      );

      histories.push({
        timeRange: entry[1],
        history: assetsPriceHistory,
      });
    }
    console.log('end asset: ', assets[j].symbol, new Date().getTime());
    assetPriceHistories.push({
      asset: assets[j].id,
      history: histories,
    });
  }
  console.log('end fetching asset prices: ', new Date().getTime());

  return assetPriceHistories;
};

async function getAllFunds(
  ethPriceHistories: any,
  currentEthPrice: string,
  timeData: TimeData,
) {
  const { from, to, interval } = timeData['1W'];

  const totalFunds = await graphqlService.getTotalFunds(from);
  const history = ethPriceHistories['1W'];

  const fundMetas = await fundService.findAllMeta();

  const funds = totalFunds.map((fund) => {
    let aum = fund.portfolio.holdings.reduce(
      (acc, cur) => acc + Number(cur.amount) * Number(cur.asset.price.price),
      0,
    );
    let totalShareSupply = Number(fund.shares.totalSupply || 0);

    aum *= Number(currentEthPrice);

    let aum1WAgo = fund.firstPortfolio?.[0]?.holdings?.reduce(
      (acc, cur) => acc + Number(cur.amount) * Number(cur.price.price),
      0,
    );
    let totalShareSupply1WAgo = Number(fund.firstShare?.[0]?.totalSupply || 0);

    const prices = history[`price_history_${from}`];
    aum1WAgo *= Number(prices?.[0]?.price || 0);

    // get assets
    const assets = fund.portfolio.holdings.map((holding) => ({
      aum: Number(holding.amount) * Number(holding.asset.price.price),
      ...holding.asset,
    }));
    assets.sort((a, b) => b.aum - a.aum);

    const meta = fundMetas.find((item) => item.address === fund.id);
    return {
      aum,
      aum1WAgo,
      totalShareSupply,
      totalShareSupply1WAgo,
      sharePrice: totalShareSupply > 0 ? aum / totalShareSupply : 0,
      sharePrice1WAgo:
        totalShareSupply1WAgo > 0 ? aum1WAgo / totalShareSupply1WAgo : 0,
      assets,
      ...fund,
      image: meta?.image,
      category:
        meta?.category !== undefined ? meta?.category : FundCategoryType.ICON,
      description: meta?.description,
    };
  });

  funds.sort((a, b) => b.aum - a.aum);

  return funds;
}

async function run() {
  try {
    if (!app) {
      app = await NestFactory.createApplicationContext(AppModule);
    }
    if (!currencyService) {
      currencyService = app.get(CurrencyService);
    }
    if (!graphqlService) {
      graphqlService = app.get(GraphqlService);
    }
    if (!fundService) {
      fundService = app.get(FundService);
    }

    isBusy = true;
    if (app && currencyService && graphqlService && fundService) {
      const timeData = getNormalizedTimes();
      console.log('Prepared timeData: ');
      const ethPriceHistories = await getEthPriceHistories(timeData);
      console.log('Prepared eth prices: ');

      const assets = await currencyService.getAssets();
      console.log('Prepared assets: ');
      const currentEthPrice = await currencyService.getCurrentEthPrice();
      console.log('Prepared current eth price: ');
      const allFunds = await getAllFunds(
        ethPriceHistories,
        currentEthPrice,
        timeData,
      );
      console.log('Prepared all funds: ');
      const monthlyEthPrices = await currencyService.getMonthlyEthPrices();
      console.log('Prepared monthly eth prices: ');
      // const assetPriceHistories = await getAssetPriceHistories(
      //   assets,
      //   timeData,
      // );
      console.log('end worker: ');

      parentPort.postMessage({
        timeData,
        currentEthPrice,
        ethPriceHistories,
        assets,
        assetPriceHistories: [],
        monthlyEthPrices,
        allFunds,
        // assetPriceHistories,
      });
    }
  } catch (err) {
  } finally {
    isBusy = false;
  }
}

run();
setInterval(() => {
  if (!isBusy) {
    run();
  }
}, FETCH_INTERVAL);
