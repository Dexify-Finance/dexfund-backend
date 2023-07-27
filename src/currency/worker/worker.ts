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

async function main() {
}

main();
