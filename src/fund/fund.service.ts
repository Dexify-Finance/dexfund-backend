import {
  Injectable,
  Logger,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CurrencyService } from 'src/currency/currency.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Fund, FundCategoryType } from './entity/fund.entity';
import { ILike, Repository } from 'typeorm';
import { UpdateFundDto } from './dto/update-fund.dto';
import { WalletService } from 'src/shared/services/wallet.service';
import { BucketService } from 'src/shared/services/bucket.service';
import { ADMINS } from '../utils/constants';

@Injectable()
export class FundService {
  private readonly logger = new Logger(FundService.name);

  constructor(
    private readonly currencyService: CurrencyService,
    private readonly walletService: WalletService,
    private readonly bucketService: BucketService,
    @InjectRepository(Fund)
    private fundRepository: Repository<Fund>,
  ) {}

  async getFund(address: string) {
    const fund = await this.findOneFundByAddress(address);

    return fund;
  }


  async getTopFunds(): Promise<Fund[]> {
    const funds = await this.fundRepository.find({
      take: 10
    });

    return funds;
  }

  async getAllFunds(): Promise<Fund[]> {
    const funds = await this.fundRepository.find();
    return funds;
  }


  async updateFund(
    updateFundDto: UpdateFundDto,
    file: Express.Multer.File,
  ) {
    this.walletService.verifySigner(
      updateFundDto.userAddress,
      updateFundDto.signature,
    );
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
