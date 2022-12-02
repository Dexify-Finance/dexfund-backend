import { LogType } from './../shared/utility/enums';
import { ConfigService } from './../config/config.service';
import { WalletService } from './../shared/services/wallet.service';
import { LoggingService } from './../logger/logging.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTwitterDto } from './dto/create-twitter.dto';
import { Twitter } from './entities/twitter.entity';
import { catchError, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';

@Injectable()
export class TwitterService {
  constructor(
    @InjectRepository(Twitter)
    private twitterRepository: Repository<Twitter>,
    private logger: LoggingService,
    private readonly walletService: WalletService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
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
    const twitterUser = await this.findOneTwitterUserByAddress(
      createTwitterDto.address,
    );
    if (twitterUser) {
      await this.twitterRepository.update(
        {
          address: createTwitterDto.address,
        },
        createTwitterDto,
      );

      return this.findOneTwitterUserByAddress(createTwitterDto.address);
    }
    return this.createNewTwitterUser(createTwitterDto);
  }

  async getRecentTweetsByAddress(address: string): Promise<any> {
    const twitterUser = await this.findOneTwitterUserByAddress(address);
    const { data } = await lastValueFrom(
      this.httpService
        .get(
          `${this.twitterEndpointUrl}?query=from%3A${twitterUser.twitterName}%20-is%3Aretweet&tweet.fields=author_id`,
          {
            headers: {
              'User-Agent': 'v2RecentSearchJS',
              authorization: `Bearer ${this.twitterApiBearToken}`,
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.log({
              type: LogType.ERROR,
              message: `An error happened to fetch recent tweets for user: ${twitterUser.twitterName} with error: ${error}`,
            });
            throw 'An error happened to fetch recent tweets!';
          }),
        ),
    );
    return { tweets: data.data, twitterUser };
  }

  async findOneTwitterUserByAddress(address: string) {
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
