import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

export interface Config {
  NODE_ENV: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  AWS_REGION: string;
  AWS_S3_BUCKET: string;
  IAM_USER_ACCESS_KEY: string;
  IAM_USER_SECRET_KEY: string;
  TWITTER_API_BEARER_TOKEN: string;
  TWITTER_ENDPOINT_URL: string;
  BNB_PRICE_TIME_INTERVAL: number;
  BNB_PRICE_URL: string;
}

export enum NodeEnv {
  DEV = 'dev',
  TEST = 'test',
  PROD = 'prod',
}

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {
    this.getConfig();
  }

  getConfig(): Config {
    const nodeEnv = this.getRequired('NODE_ENV');
    if (!Object.values(NodeEnv).includes(nodeEnv as NodeEnv)) {
      throw new Error('Invalid NODE_ENV value');
    }

    return {
      NODE_ENV: nodeEnv,
      DB_HOST: this.getRequired('DB_HOST'),
      DB_PORT: +this.getRequired('DB_PORT'),
      DB_NAME: this.getRequired('DB_NAME'),
      DB_USER: this.getRequired('DB_USER'),
      DB_PASSWORD: this.getRequired('DB_PASSWORD'),
      AWS_REGION: this.getRequired('AWS_REGION'),
      AWS_S3_BUCKET: this.getRequired('AWS_S3_BUCKET'),
      IAM_USER_ACCESS_KEY: this.getRequired('IAM_USER_ACCESS_KEY'),
      IAM_USER_SECRET_KEY: this.getRequired('IAM_USER_SECRET_KEY'),
      TWITTER_API_BEARER_TOKEN: this.getRequired('TWITTER_API_BEARER_TOKEN'),
      TWITTER_ENDPOINT_URL: this.getRequired('TWITTER_ENDPOINT_URL'),
      BNB_PRICE_TIME_INTERVAL: this.configService.get<number>(
        'BNB_PRICE_TIME_INTERVAL',
      ),
      BNB_PRICE_URL: this.getRequired('BNB_PRICE_URL'),
    };
  }

  private getRequired(name: string) {
    const value = this.configService.get<string>(name);
    if (value == null) {
      throw new Error(`You must provide ${name} env variable.`);
    }
    return value;
  }
}
