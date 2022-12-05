import { User } from './../user/entities/user.entity';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { ApiTags } from '@nestjs/swagger';
import { ConnectTwitterDto } from './dto/connect-twitter.dto';

@ApiTags('Twitter')
@Controller('twitter')
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) {}

  @Get('tweets')
  getRecentTweets(@Query('address') address: string): Promise<any> {
    return this.twitterService.getRecentTweetsByAddress(address);
  }

  @Post('connect')
  connectToTwitter(
    @Body() connectTwitterDto: ConnectTwitterDto,
  ): Promise<User> {
    return this.twitterService.getTwitterProfileAndUpdateUserInfo(
      connectTwitterDto,
    );
  }

  @Get('auth_link')
  getAuthLink() {
    return this.twitterService.getAuthLink();
  }

  @Get('disconnect')
  deleteTwitterUser(
    @Query('address') address: string,
    @Query('signature') signature: string,
  ) {
    return this.twitterService.deleteTwitterUser(address, signature);
  }
}
