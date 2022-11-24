import { LogType } from './../shared/utility/enums';
import { ConfigService } from './../config/config.service';
import { WalletService } from './../shared/services/wallet.service';
import { LoggingService } from './../logger/logging.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTwitterDto } from './dto/create-twitter.dto';
import { Twitter } from './entities/twitter.entity';
import { needle } from 'needle';

@Injectable()
export class TwitterService {
  constructor(
    @InjectRepository(Twitter)
    private twitterRepository: Repository<Twitter>,
    private logger: LoggingService,
    private readonly walletService: WalletService,
    private configService: ConfigService,
  ) {}
  config = this.configService.getConfig();

  private readonly twitterApiBearToken =
    this.configService.getConfig().TWITTER_API_BEARER_TOKEN;
  private readonly twitterEndpointUrl =
    this.configService.getConfig().TWITTER_ENDPOINT_URL;

  async createOrUpdate(createTwitterDto: CreateTwitterDto) {
    this.walletService.verifySigner(
      createTwitterDto.address,
      createTwitterDto.signature,
    );
    delete createTwitterDto.signature;
    const twitterUser = await this.findOneTwitterUserByFundAddress(
      createTwitterDto.fundAddress,
    );
    if (twitterUser) {
      await this.twitterRepository.update(
        {
          fundAddress: createTwitterDto.fundAddress,
        },
        createTwitterDto,
      );

      return this.findOneTwitterUserByFundAddress(createTwitterDto.address);
    }
    return this.createNewTwitterUser(createTwitterDto);
  }

  async getRecentTweetsByFundAddress(fundAddress: string) {
    const twitterUser = await this.findOneTwitterUserByFundAddress(fundAddress);

    const params = {
      query: `from:${twitterUser.twitterScreenName} -is:retweet`,
      'tweet.fields': 'author_id',
    };

    return await needle('get', this.twitterEndpointUrl, params, {
      headers: {
        'User-Agent': 'v2RecentSearchJS',
        authorization: `Bearer ${this.twitterApiBearToken}`,
      },
    });
  }

  async findOneTwitterUserByFundAddress(address: string) {
    this.walletService.verifyAddress(address);
    const twitterUser = await this.twitterRepository.findOneBy({ address });
    if (!twitterUser) {
      this.logger.log({
        type: LogType.WARN,
        message: `No user provided for fund address ${address}`,
      });

      throw new NotFoundException('Not found this user!');
    }
    return twitterUser;
  }

  private async createNewTwitterUser(data: any): Promise<Twitter> {
    return await this.twitterRepository.save(data);
  }
}
