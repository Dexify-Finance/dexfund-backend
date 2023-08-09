import {
  Injectable,
  Logger,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fund, FundCategoryType } from './entity/fund.entity';
import { ILike, Repository } from 'typeorm';
import { UpdateFundDto } from './dto/update-fund.dto';
import { WalletService } from 'src/shared/services/wallet.service';
import { BucketService } from 'src/shared/services/bucket.service';
import { ADMINS } from '../utils/constants';
import { PortfolioAsset } from './entity/portfolio.entity';
import { FundInvestor } from './entity/investor.entity';
import { Address } from 'everscale-inpage-provider';
import { CurrencyService } from 'src/currency/currency.service';
import { FundAction } from './entity/fund-action.entity';

@Injectable()
export class FundService {
  private readonly logger = new Logger(FundService.name);

  constructor(
    private readonly walletService: WalletService,
    private readonly bucketService: BucketService,
    private readonly currencyService: CurrencyService,
    @InjectRepository(Fund)
    private fundRepository: Repository<Fund>,
    @InjectRepository(PortfolioAsset)
    private portfolioAssetRepository: Repository<PortfolioAsset>,
    @InjectRepository(FundInvestor)
    private investorRepository: Repository<FundInvestor>,
    @InjectRepository(FundAction)
    private fundActionRepository: Repository<FundAction>
  ) {}

  async getFund(address: string) {
    const fund = await this.findOneFundByAddress(address);
    const portfolio = await this.getFundPortfolio(address);
    const investors = await this.getFundInvestors(address);
    return {
      ...fund,
      portfolio,
      investors
    };
  }


  async getTopFunds(): Promise<Fund[]> {
    const funds = await this.fundRepository.find({
      take: 10
    });

    return funds;
  }

  async getAllFunds(): Promise<(Fund | FundInvestor | (PortfolioAsset | {price: string}))[]> {
    const funds = await this.fundRepository.find();
    const res = await Promise.all(funds.map(async fund => {
      const portfolio = await this.getFundPortfolio(fund.address);
      const investors = await this.getFundInvestors(fund.address);
      return {
        ...fund,
        portfolio,
        investors
      }
    }))

    return res;
  }


  async updateFund(
    updateFundDto: UpdateFundDto,
    file: Express.Multer.File,
  ) {
    // this.walletService.verifySigner(
    //   updateFundDto.userAddress,
    //   updateFundDto.signature,
    // );
    const fund = await this.findOneFundByAddress(updateFundDto.address);

    if (
      fund.owner.toLowerCase() !== updateFundDto.userAddress.toLowerCase() &&
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
  }

  async createNewFund(data: any): Promise<Fund> {
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

  async getFundsByCategory(category: FundCategoryType, limit: number, skip: number) {
    return await this.fundRepository.find({
      where: {
        category,
      },
      take: limit,
      skip
    })
  }

 async updateFundPortfolio(fundAddress: string, currency: string, amount: string) {
  try {
    let record = await this.portfolioAssetRepository.findOne({
      where: {
        fund: fundAddress,
        currency: currency
      }
    });

    if (record) {
      record.amount = amount;
      record.timestamp = Date.now().toString();
    } else {
      record = new PortfolioAsset();
      record.fund = fundAddress;
      record.currency = currency;
      record.amount = amount;
      record.timestamp = Date.now().toString();
    }

    await this.portfolioAssetRepository.save([record]);
  } catch (err) {
    this.logger.error(`Failed to update fund portfolio`);
  }
    
  }

  getFundRepository() {
    return this.fundRepository;
  }

  async updateFundInvestor(fundAddress: Address, investorAddress: Address, shareAmount: string, isDeposit: boolean) {
    try {
      let record = await this.investorRepository.findOne({
        where: {
          fund: fundAddress.toString(),
          investor: investorAddress.toString()
        }
      });
  
      if (isDeposit) {
        if (record) {
          record.amount = String(Number(record.amount) + Number(shareAmount));
          record.timestamp = Date.now().toString();
        } else {
          record = new FundInvestor();
          record.fund = fundAddress.toString();
          record.investor = investorAddress.toString();
          record.amount = shareAmount;
          record.timestamp = Date.now().toString();
        }
    
      } else {
        if (record) {
          record.amount = String(Number(record.amount) - Number(shareAmount));
          record.timestamp = Date.now().toString();
        }
      }
      
      await this.investorRepository.save([record]);
    } catch (err) {
      this.logger.error(`Failed to update fund investor`);
    }
    
  }

  async updateFundData(fundAddress: Address, key: string, value: string) {
    let record = await this.fundRepository.findOne({
      where: {
        address: fundAddress.toString(),
      }
    })

    record[key] = value;
    await this.fundRepository.save([record]);
  }

  async updateFundAction(fundAddress: Address, investor: Address, tokenRoot: Address, tokenAmount: string, action: string) {
    try {
      const fundAction = new FundAction();
      fundAction.fund = fundAddress.toString();
      fundAction.investor = investor.toString();
      fundAction.currency = tokenRoot.toString();
      fundAction.action_type = action;
      fundAction.amount = tokenAmount;
      fundAction.timestamp = Date.now().toString();

      await this.fundActionRepository.save([fundAction]);
    } catch (err) {
      this.logger.error(`Failed to save fund action`)
    }
  }

  async getFundPortfolio(fundAddress: string) {
    const portfolioAssets = await this.portfolioAssetRepository.find({
      where: {
        fund: fundAddress,
      }
    });

    const res = await Promise.all(portfolioAssets.map(async asset => {
      const price = await this.currencyService.getPrice(asset.currency, Date.now().toString());
      return {
        ...asset,
        price
      }
    }));

    return res;
  }

  async getFundInvestors(fundAddress: string) {
    
    const investorData = await this.investorRepository.find({
      where: {
        fund: fundAddress
      }
    });

    return investorData;
  }

  async getFundAction(fundAddress: string, take: number, skip: number) {
    const actions = await this.fundActionRepository.find({
      where: {
        fund: fundAddress
      },
      take,
      skip
    });

    return actions;
  }

  async getFundActionByUser(fundAddress: string, userAddress: string, take: number, skip: number) {
    const actions = await this.fundActionRepository.find({
      where: {
        fund: fundAddress,
        investor: userAddress
      },
      take,
      skip
    });

    return actions;
  }
}
