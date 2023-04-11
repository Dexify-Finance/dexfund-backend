import { Injectable } from '@nestjs/common';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  ApolloQueryResult,
} from '@apollo/client/core';
import { GRAPHQL_SERVER } from 'src/utils/constants';
import {
  fundOverviewQuery,
  fundOverviewWithHistoryQuery,
} from './queries/fund_overview.graphql';
import fetch from 'cross-fetch';
import { FundDto } from './dto/fund';
import { CurrencyDto } from './dto/currency';
import {
  currency,
  currencyPriceHistoryQuery,
  monthlyEthPriceQuery,
} from './queries/currrency_price.graphql';
import { assetPriceHistoryQuery, assetsQuery } from './queries/assets.graphql';
import { AssetDto } from './dto/asset';
import { allFunds } from './queries/all_funds.graphql';
import { _1W } from 'src/utils/constants';

@Injectable()
export class GraphqlService {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.client = new ApolloClient({
      link: new HttpLink({ uri: GRAPHQL_SERVER, fetch }),
      cache: new InMemoryCache(),
    });
  }

  async getFundOverview(id: string): Promise<FundDto> {
    const result = await this.client.query({
      query: fundOverviewQuery(id),
    });

    if (result.error || (result.errors && result.errors.length > 0)) {
      throw Error;
    }

    return result.data.fund as FundDto;
  }

  async getFundOverviewWithHistory(
    id: string,
    from: number,
    to: number,
  ): Promise<FundDto> {
    const result = await this.client.query({
      query: fundOverviewWithHistoryQuery(id, from, to),
    });

    if (result.error || (result.errors && result.errors.length > 0)) {
      throw Error;
    }

    return result.data.fund as FundDto;
  }

  async getCurrencyPriceHistory(
    id: string,
    from: number,
    to: number,
    interval: number,
  ): Promise<CurrencyDto[]> {
    const result = await this.client.query({
      query: currencyPriceHistoryQuery(id, from, to, interval),
    });

    if (result.error || (result.errors && result.errors.length > 0)) {
      console.log("err: ", result.error, result.errors)
      throw Error;
    }

    return result.data.currency as CurrencyDto[];
  }

  async getAssets(): Promise<AssetDto[]> {
    const result = await this.client.query({
      query: assetsQuery(),
    });

    if (result.error || (result.errors && result.errors.length > 0)) {
      throw Error;
    }

    return result.data.assets as AssetDto[];
  }

  async getAssetPriceHistory(
    id: string,
    from: number,
    to: number,
    interval: number,
  ): Promise<AssetDto[]> {
    const result = await this.client.query({
      query: assetPriceHistoryQuery(id, from, to, interval),
    });

    if (result.error || (result.errors && result.errors.length > 0)) {
      throw Error;
    }

    return result.data.asset as AssetDto[];
  }

  async getCurrency(id: string) {
    const result = await this.client.query({
      query: currency(id),
    });

    if (result.error || (result.errors && result.errors.length > 0)) {
      throw Error;
    }

    return result.data.currency as CurrencyDto;
  }

  async getTotalFunds(from: number = Math.ceil(new Date().getTime() / 1000) - _1W) {
    let result: ApolloQueryResult<any>;
    let skip = 0;
    let totalFunds: FundDto[] = [];
    
    console.log("start: ", new Date().getTime());
    while (
      ((result = await this.client.query({
        query: allFunds(skip, from),
      })),
      result.data.funds.length > 0)
    ) {
      if (result.error || (result.errors && result.errors.length > 0)) {
        throw Error;
      }
      totalFunds = totalFunds.concat(result.data.funds);
      skip += totalFunds.length;
    }
    console.log("end: ", new Date().getTime());

    return totalFunds;
  }

  async getMonthlyEthPrices() {
    const result = await this.client.query({
      query: monthlyEthPriceQuery(),
    });


    if (result.error || (result.errors && result.errors.length > 0)) {
      throw Error;
    }


    return result.data.currency as CurrencyDto[];
  }
}
