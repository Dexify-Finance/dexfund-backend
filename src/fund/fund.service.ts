import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CurrencyService } from 'src/currency/currency.service';
import { PortfolioDto } from 'src/graphql/dto/portfolio';
import { GraphqlService } from 'src/graphql/graphql.service';
import {
  FundDto,
  FundOverviewResponse,
  FundOverviewWithHistoryResponse,
} from './dto/fund.dto';
import * as sparkline from 'node-sparkline';
import { SparkLineConfig } from 'src/utils/constants';
import { ShareStateDto } from 'src/graphql/dto/share';
import { FundDto as GraphQLFundDto } from 'src/graphql/dto/fund';
import { InjectRepository } from '@nestjs/typeorm';
import { Fund, FundCategoryType } from './entity/fund.entity';
import { ILike, Repository } from 'typeorm';
import { UpdateFundDto } from './dto/update-fund.dto';
import { WalletService } from 'src/shared/services/wallet.service';
import { BucketService } from 'src/shared/services/bucket.service';
import { ethers } from 'ethers';
import VaultLib from '../abi/VaultLib.js';
import { ADMINS } from '../utils/constants';
import { AssetDto } from 'src/graphql/dto/asset';
import { MonthlyStateDto } from 'src/graphql/dto/monthlyState';

@Injectable()
export class FundService {
  private readonly logger = new Logger(FundService.name);

  constructor(
    private readonly graphqlSerivce: GraphqlService,
    private readonly currencyService: CurrencyService,
    private readonly walletService: WalletService,
    private readonly bucketService: BucketService,
    @InjectRepository(Fund)
    private fundRepository: Repository<Fund>,
  ) {}

  async getFundOverview(id: string) {
    const data = await this.graphqlSerivce.getFundOverview(id);
    const fundMeta = await this.findOneFundByAddress(data.id);
    data.image = fundMeta?.image;
    data.category = fundMeta?.category;

    return data;
  }

  async getFundOverviewWithHistory(id: string, timeRange: string) {
    const timeData = this.currencyService.timeData;
    const { from, to, interval } = timeData[timeRange];
    const fundDetail = await this.graphqlSerivce.getFundOverviewWithHistory(
      id,
      from,
      to,
    );

    const overview: Partial<FundOverviewWithHistoryResponse> = {
      id: fundDetail.id,
      name: fundDetail.name,
      inception: fundDetail.inception,
      accessor: fundDetail.accessor,
      creator: fundDetail.creator,
      manager: fundDetail.manager,
      totalShares: Number(fundDetail.lastShare?.[0]?.totalSupply),
    };

    const fundMeta = await this.findOneFundByAddress(fundDetail.id);
    overview.image = fundMeta?.image;
    overview.category = fundMeta?.category;
    overview.description = fundMeta?.description;
    // calc aum
    const aum = await this.calcAUM(fundDetail.portfolio);
    overview.aum = aum;

    // generate sparkline
    const { svg, aumChanges, svg_sharePrices, sharePriceChanges } =
      await this.generateChartData(
        fundDetail,
        timeRange,
        timeData[timeRange],
        true,
      );

    // get monthly states
    const monthlyStates = await this.calcMonthlyData(fundDetail);
    overview.monthlyStates = monthlyStates;

    overview.sparkline = svg;
    overview.sparkline_shares = svg_sharePrices;
    overview.aumChanges = aumChanges;
    overview.sharePriceChanges = sharePriceChanges;

    // get assets
    const assets = fundDetail.portfolio.holdings.map((holding) => ({
      aum: Number(holding.amount) * Number(holding.asset.price.price),
      ...holding.asset,
      amount: Number(holding.amount),
    }));
    assets.sort((a, b) => b.aum - a.aum);
    overview.assets = assets;

    const { volatility, sharpeRatio } = this.getRisk(assets, fundDetail.monthlyStates);

    console.log('volatility: ', volatility, sharpeRatio);

    overview.sharpeRatio = sharpeRatio;
    overview.volatility = volatility;
    
    return overview;
  }

  getRisk(
    assets: (AssetDto & { aum: number; amount: number })[],
    monthlyStates: MonthlyStateDto[],
  ) {
    // Volatility
    // Calculate the daily returns of each asset
    const filteredPrices =
      this.currencyService.monthlyAssetsPricesCandles.filter((item) =>
        assets.find((asset) => item.asset.id === asset.id),
      );

    const assetReturns = {};
    assets.map((asset) => {
      assetReturns[asset.id] = [];
      const assetPrices = filteredPrices.find(
        (item) => item.asset.id === asset.id,
      )?.data;
      for (let i = 1; i < assetPrices.length; i++) {
        const ethPrice1 = this.currencyService.monthlyEthPriceCandles.find(
          (item) => item.to === assetPrices[i].to,
        )?.close;
        const ethPrice0 = this.currencyService.monthlyEthPriceCandles.find(
          (item) => item.to === assetPrices[i - 1].to,
        )?.close;

        const monthlyReturn =
          Number(assetPrices[i - 1].close) * Number(ethPrice0)
            ? (Number(assetPrices[i].close) * Number(ethPrice1) -
                Number(assetPrices[i - 1].close) * Number(ethPrice0)) /
              (Number(assetPrices[i - 1].close) * Number(ethPrice0))
            : 0;
        assetReturns[asset.id].push({
          ...assetPrices[i],
          return: monthlyReturn,
        });
      }
    });

    // Prepare monthly asset weights
    const portfolioWeights = [];
    monthlyStates.map((state) => {
      const { last, end } = state;
      const assetWeights = {};
      const aum = last.portfolio.holdings.reduce((curr, cur) => curr + Number(cur.amount) * Number(cur.price.price), 0);
      last.portfolio.holdings.map(holding => {
        const assetAum = Number(holding.amount) * Number(holding.price.price);
        assetWeights[holding.asset.id] = aum ? assetAum / aum : 0;
      });
      portfolioWeights.push({
        to: end,
        assetWeights
      })
    });

    // Calculate the portfolio returns for each day
    const portfolioReturns = [];
    for (let i = 0; i < monthlyStates.length; i++) {
      let monthlyPortfolioReturn = 0;
      const {assetWeights, to} = portfolioWeights.find(item => item.to === monthlyStates[i].end);

      for (const asset in assetWeights) {
        const weight = assetWeights[asset];
        const assetReturn = assetReturns[asset]?.find((item: any) => item.to === to);
        monthlyPortfolioReturn += Number(weight) * Number(assetReturn?.return || 0);
      }
      portfolioReturns.push(monthlyPortfolioReturn);
    }

    // Calculate the standard deviation of the portfolio returns
    const meanReturn = portfolioReturns.reduce((a, b) => a + b, 0) / portfolioReturns.length;
    const variance = portfolioReturns.reduce((a, b) => a + (b - meanReturn) ** 2, 0) / (portfolioReturns.length - 1);
    const standardDeviation = Math.sqrt(variance);

    // Sharp
    // Calculate the risk-free rate of return (e.g., US Treasury Bill yield)
    const riskFreeRate = 0.01;
    const sharpeRatio = (meanReturn - riskFreeRate) / standardDeviation;

    return {volatility: standardDeviation, sharpeRatio};
  }

  async getFundChartData(id: string, timeRange: string) {
    const timeData = this.currencyService.timeData;
    const { from, to, interval } = timeData[timeRange];

    const fundDetail = await this.graphqlSerivce.getFundOverviewWithHistory(
      id,
      from,
      to,
    );
    // generate sparkline
    const {
      data: aumHistory,
      data_shares: sharePriceHistory,
      timeData: timeHistory,
    } = await this.generateChartData(
      fundDetail,
      timeRange,
      timeData[timeRange],
      false,
    );

    return { aumHistory, sharePriceHistory, timeHistory };
  }

  async getTotalFunds() {
    return this.graphqlSerivce.getTotalFunds();
  }

  private async calcAUM(portfolio: PortfolioDto) {
    let aum = 0;
    const ethPrice = this.currencyService.currentEthPrice;

    aum = portfolio.holdings.reduce(
      (acc, cur) => acc + Number(cur.amount) * Number(cur.asset.price.price),
      0,
    );
    aum *= Number(ethPrice);

    return aum;
  }

  private getPortfolioAt(
    reversedPortfolioHistory: PortfolioDto[],
    timestamp: string,
  ) {
    const portfolio = reversedPortfolioHistory.find(
      (portfolio) => portfolio.timestamp <= timestamp,
    );
    return portfolio;
  }

  private getSharesAt(
    reversedShareHistory: ShareStateDto[],
    timestamp: string,
  ) {
    const shares = reversedShareHistory.find(
      (shares) => shares.timestamp <= timestamp,
    );
    return shares;
  }

  private async generateChartData(
    fundDetail: GraphQLFundDto,
    timeRange: string,
    times: { from: number; to: number; interval: number },
    isSvg: boolean = false,
  ) {
    let portfolioHistory = fundDetail.portfolioHistory;
    portfolioHistory = fundDetail.firstPortfolio
      .concat(portfolioHistory)
      .concat(fundDetail.lastPortfolio);

    let shareHistory = fundDetail.sharesHistory;
    shareHistory = fundDetail.firstShare
      .concat(shareHistory)
      .concat(fundDetail.lastShare);

    let data: number[] = [];
    let data_shares: number[] = [];
    let timeData: number[] = [];

    const reversedPortfolio = portfolioHistory.reverse();
    const reversedShareHistory = shareHistory.reverse();

    for (let i = times.from; i <= times.to; i += times.interval) {
      let portfolio = this.getPortfolioAt(reversedPortfolio, i.toString());
      let shares = this.getSharesAt(reversedShareHistory, i.toString());

      if (!portfolio || !shares) {
        continue;
      }

      let aum = portfolio.holdings.reduce(
        (acc, cur) => acc + Number(cur.amount) * Number(cur.price.price),
        0,
      );
      const ethPrice = this.currencyService.getEthPriceAt(
        i.toString(),
        timeRange,
      );
     
      aum *= Number(ethPrice);
      data.push(aum);
      data_shares.push(aum / Number(shares.totalSupply || 1));
      timeData.push(i);
    }

    let svg, svg_sharePrices;
    if (isSvg) {
      svg = sparkline({
        values: data,
        ...SparkLineConfig,
      });

      svg_sharePrices = sparkline({
        values: data_shares,
        ...SparkLineConfig,
      });
    }

    const aumChanges =
      data?.[0] > 0 ? (data[data.length - 1] - data[0]) / data[0] : 1;
    const sharePriceChanges =
      data_shares?.[0] > 0
        ? (data_shares[data_shares.length - 1] - data_shares[0]) /
          data_shares[0]
        : 1;

    return {
      svg,
      svg_sharePrices,
      aumChanges,
      sharePriceChanges,
      data,
      data_shares,
      timeData,
    };
  }

  private async calcMonthlyData(fund: GraphQLFundDto) {
    const monthlyData = fund.monthlyStates;
    let lastAum, lastSharePrice;

    const monthlyStates = monthlyData.map((mData) => {
      const startTime = mData.start;
      const year = new Date(Number(startTime) * 1000).getUTCFullYear();
      const month = new Date(Number(startTime) * 1000).getUTCMonth();

      const endEthPrice = mData.last.currencyPrices[0].price;
      let endAum = mData.last.portfolio.holdings.reduce(
        (acc, cur) => acc + Number(cur.amount) * Number(cur.price.price),
        0,
      );
      endAum *= Number(endEthPrice);

      const endSharesSupply = Number(mData.last.shares.totalSupply);

      const aumChangeBips = lastAum > 0 ? (endAum - lastAum) / lastAum : 1;
      const sharePriceChangeBips =
        lastAum > 0
          ? (endAum / endSharesSupply - lastSharePrice) / lastSharePrice
          : 1;

      lastAum = endAum;
      lastSharePrice = endAum / endSharesSupply;

      return {
        year,
        month,
        aumChangeBips,
        sharePriceChangeBips,
      };
    });

    return monthlyStates;
  }

  async getTopFunds() {
    const topFunds = this.currencyService.allFunds.slice(0, 10);
    return this.constructFundOverviewResponse(topFunds);
  }

  async getAllFunds(): Promise<FundOverviewResponse[]> {
    return this.constructFundOverviewResponse(this.currencyService.allFunds);
  }

  private constructFundOverviewResponse(funds: FundDto[]) {
    const fundData: FundOverviewResponse[] = funds.map((fund) => {
      return {
        id: fund.id,
        inception: fund.inception,
        totalShareSupply1WAgo: fund.totalShareSupply1WAgo,
        accessor: fund.accessor,
        assets: fund.assets,
        aum: fund.aum,
        aum1WAgo: fund.aum1WAgo,
        creator: fund.creator,
        manager: fund.manager,
        name: fund.name,
        sharePrice: fund.sharePrice,
        sharePrice1WAgo: fund.sharePrice1WAgo,
        totalShares: fund.totalShares,
        totalShareSupply: fund.totalShareSupply,
        image: fund.image,
        category: fund.category,
        description: fund.description,
      };
    });
    return fundData;
  }

  /// DB actions and queries
  async getFundMeta(address: string) {
    const fund = await this.findOneFundByAddress(address);
    if (!fund) {
      this.logger.warn('Fund not found');
      // throw new BadRequestException('Fund not found');
      return;
    }
    this.logger.log(`Fund found: address is ${fund.address}`);
    return fund;
  }

  async createOrUpdate(
    updateFundDto: UpdateFundDto,
    file: Express.Multer.File,
  ) {
    this.walletService.verifySigner(
      updateFundDto.userAddress,
      updateFundDto.signature,
    );

    const provider = new ethers.providers.JsonRpcProvider(
      'https://bsc-dataseed1.defibit.io',
    );
    const contract = new ethers.Contract(
      updateFundDto.address,
      VaultLib.abi,
      provider,
    );
    const fundOwner = await contract.getOwner();

    if (
      fundOwner.toLowerCase() !== updateFundDto.userAddress.toLowerCase() &&
      !ADMINS.find(
        (item) =>
          item.toLowerCase() === updateFundDto.userAddress.toLowerCase(),
      )
    ) {
      this.logger.error('You are not owner of this fund');

      throw new UnauthorizedException({
        message: 'Not owner of fund',
        code: 'Invalid user',
      });
    }

    let imageUrl: string;
    if (file) {
      imageUrl = await this.uploadImageToS3(file);
    }
    delete updateFundDto.signature;
    delete updateFundDto.file;
    delete updateFundDto.userAddress;

    const fund = await this.findOneFundByAddress(updateFundDto.address);
    if (fund) {
      let data: Partial<Fund> = {};
      if (updateFundDto.category !== undefined) {
        data.category = updateFundDto.category;
      }
      if (updateFundDto.description) {
        data.description = updateFundDto.description;
      }
      if (updateFundDto.file) {
        data.image = imageUrl;
      }

      await this.fundRepository.update(
        {
          address: ILike(updateFundDto.address),
        },
        data,
      );

      return this.findOneFundByAddress(updateFundDto.address);
    }
    return this.createNewFund({ ...updateFundDto, image: imageUrl ?? '' });
  }

  private async createNewFund(data: any): Promise<Fund> {
    return await this.fundRepository.save(data);
  }

  private async findOneFundByAddress(address: string) {
    this.walletService.verifyAddress(address);
    return await this.fundRepository.findOneBy({ address: ILike(address) });
  }

  private async uploadImageToS3(file: Express.Multer.File) {
    try {
      const extension = file.originalname.split('.').pop();
      const filePath = `fund-${Date.now().toString()}.${extension}`;
      const fileUrl = await this.bucketService.putObject({
        path: filePath,
        file,
      });
      return fileUrl;
    } catch (err) {
      this.logger.error(
        `Failed to upload media [${file.originalname}], size: [${file.size}] to s3`,
      );

      throw new InternalServerErrorException('Failed to upload image');
    }
  }

  async findAllMeta() {
    const funds = await this.fundRepository.find();
    if (!funds) {
      this.logger.warn('Fund not found');
      // throw new BadRequestException('Fund not found');
      return [];
    }
    this.logger.log(`Funds found: count is ${funds.length}`);
    return funds;
  }

  async getFundsByCategory(category: FundCategoryType, limit: number) {
    const funds = this.currencyService.allFunds.filter(
      (fund) => fund.category === category,
    );
    funds.sort((a, b) => b.aum - a.aum);

    if (limit) {
      return funds.slice(0, limit);
    } else {
      return funds;
    }
  }
}
