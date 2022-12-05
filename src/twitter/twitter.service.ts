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
import Twitter from 'twitter-lite';
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

  private readonly twitterApiBearToken = this.config.TWITTER_API_BEARER_TOKEN;
  private readonly twitterEndpointUrl = this.config.TWITTER_ENDPOINT_URL;

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
    try {
      this.walletService.verifySigner(
        connectTwitterDto.address,
        connectTwitterDto.signature,
      );
      const { reqTkn, reqTknSecret } = await this.getRequestToken();
      const { accTkn, accTknSecret } = await this.getAccessToken(
        reqTkn,
        reqTknSecret,
      );

      const client = new Twitter({
        subdomain: 'api', // "api" is the default (change for other subdomains)
        version: '1.1', // version "1.1" is the default (change for other subdomains)
        consumer_key: this.config.TWITTER_CONSUMER_KEY, // from Twitter.
        consumer_secret: this.config.TWITTER_CONSUMER_SECRET, // from Twitter.
        access_token_key: accTkn, // from your User (oauth_token)
        access_token_secret: accTknSecret, // from your User (oauth_token_secret)
      });

      const res = await client.get('account/verify_credentials');
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  private async getAccessToken(oauthToken: string, oauthVerifier: string) {
    const client = new Twitter({
      consumer_key: this.config.TWITTER_CONSUMER_KEY,
      consumer_secret: this.config.TWITTER_CONSUMER_SECRET,
    });
    try {
      const response = await client.getAccessToken({
        oauth_verifier: oauthVerifier,
        oauth_token: oauthToken,
      });
      console.log({
        accTkn: response.oauth_token,
        accTknSecret: response.oauth_token_secret,
        userId: response.user_id,
        screenName: response.screen_name,
      });
      return {
        accTkn: response.oauth_token,
        accTknSecret: response.oauth_token_secret,
      };
    } catch (error) {
      console.log(error);
    }
  }

  private async getRequestToken() {
    const client = new Twitter({
      consumer_key: this.config.TWITTER_CONSUMER_KEY,
      consumer_secret: this.config.TWITTER_CONSUMER_SECRET,
    });
    try {
      const response = await client.getRequestToken('https://dexify.finance');
      if (response.oauth_callback_confirmed === 'true') {
        return {
          reqTkn: response?.oauth_token,
          reqTknSecret: response?.oauth_token_secret,
        };
      } else return;
    } catch (error) {
      console.log(error);
    }
  }
}
