import { ConnectTwitterDto } from './dto/connect-twitter.dto';
import { User } from './../user/entities/user.entity';
import { LogType } from './../shared/utility/enums';
import { ConfigService } from './../config/config.service';
import { WalletService } from './../shared/services/wallet.service';
import { LoggingService } from './../logger/logging.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { catchError, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { TwitterApi } from 'twitter-api-v2';
@Injectable()
export class TwitterService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
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

  async getRecentTweetsByAddress(address: string): Promise<any> {
    this.walletService.verifyAddress(address);
    const user = await this.userRepository.findOneBy({ address });
    if (!user) {
      this.logger.log({
        type: LogType.WARN,
        message: 'User not found',
      });
    }
    const { data } = await lastValueFrom(
      this.httpService
        .get(
          `${this.twitterEndpointUrl}?query=from%3A${user.twitterName}%20-is%3Aretweet&tweet.fields=author_id`,
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
              message: `An error happened to fetch recent tweets for user: ${user.twitterName} with error: ${error}`,
            });
            throw 'An error happened to fetch recent tweets!';
          }),
        ),
    );
    return { tweets: data.data, user };
  }

  async getTwitterProfileAndUpdateUserInfo(
    connectTwitterDto: ConnectTwitterDto,
  ) {
    return;
  }
  async getAuthLink() {
    const client = new TwitterApi({
      appKey: this.config.TWITTER_CONSUMER_KEY,
      appSecret: this.config.TWITTER_CONSUMER_SECRET,
    });
    const authLink = await client.generateAuthLink('https://dexify.finance');
    console.log(authLink.oauth_token, authLink.oauth_token_secret);
    return authLink.url;
  }
}
