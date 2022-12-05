import { Body, Controller, Get, Patch, Query } from '@nestjs/common';
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

  @Patch('connect')
  connectToTwitter(@Body() connectTwitterDto: ConnectTwitterDto) {
    return this.twitterService.getTwitterProfileAndUpdateUserInfo(
      connectTwitterDto,
    );
  }
}
