import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { CreateTwitterDto } from './dto/create-twitter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Twitter')
@Controller('twitter')
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) {}

  @Post()
  createOrUpdate(@Body() createTwitterDto: CreateTwitterDto) {
    return this.twitterService.createOrUpdate(createTwitterDto);
  }

  @Get()
  findOne(@Query('fundAddress') fundAddress: string) {
    return this.twitterService.findOneTwitterUserByFundAddress(fundAddress);
  }

  @Get('tweets')
  getRecentTweets(@Query('fundAddress') fundAddress: string) {
    return this.twitterService.getRecentTweetsByFundAddress(fundAddress);
  }
}
