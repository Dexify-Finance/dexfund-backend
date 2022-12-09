import { ConnectTwitterDto } from './dto/connect-twitter.dto';
import { User } from './../user/entities/user.entity';
import { LogType } from './../shared/utility/enums';
import { ConfigService } from './../config/config.service';
import { WalletService } from './../shared/services/wallet.service';
import { LoggingService } from './../logger/logging.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { catchError, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { TwitterApi, UserV1 } from 'twitter-api-v2';
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
    const user = await this.userRepository.findOneBy({
      address: ILike(address),
    });
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
    const client = new TwitterApi({
      appKey: this.config.TWITTER_CONSUMER_KEY,
      appSecret: this.config.TWITTER_CONSUMER_SECRET,
      accessToken: connectTwitterDto.oauth_token,
      accessSecret: connectTwitterDto.oauth_token_secret,
    });
    const roClient = (await client.login(connectTwitterDto.oauth_verifier))
      .client;
    const loggedUser = await roClient.currentUser();
    return this.updateUserWithTwitter(connectTwitterDto.address, loggedUser);
  }

  async getAuthLink() {
    const client = new TwitterApi({
      appKey: this.config.TWITTER_CONSUMER_KEY,
      appSecret: this.config.TWITTER_CONSUMER_SECRET,
    });
    const authLink = await client.generateAuthLink('https://dexify.finance');
    return authLink;
  }

  async deleteTwitterUser(address: string, signature: string) {
    this.walletService.verifyAddress(address);
    this.walletService.verifySigner(address, signature);
    const user = await this.userRepository.findOneBy({
      address: ILike(address),
    });
    if (!user) {
      this.logger.log({
        type: LogType.WARN,
        message: 'User not found',
      });
      throw new BadRequestException('User not found');
    }
    return await this.userRepository.save({
      ...user,
      twitterImage: null,
      twitterScreenName: null,
      twitterName: null,
    });
  }

  private async updateUserWithTwitter(
    address: string,
    loggedUser: UserV1,
  ): Promise<User> {
    this.walletService.verifyAddress(address);
    const user = await this.userRepository.findOneBy({
      address: ILike(address),
    });
    if (!user) {
      return await this.userRepository.save({
        address,
        twitterName: loggedUser.name,
        twitterScreenName: loggedUser.screen_name,
        twitterImage: loggedUser.profile_image_url_https,
      });
    }
    user.twitterName = loggedUser.name;
    user.twitterScreenName = loggedUser.screen_name;
    user.twitterImage = loggedUser.profile_image_url_https;
    return await this.userRepository.save(user);
  }
}
