import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';

export interface PutObjectParams {
  file: Express.Multer.File;
  path: string;
}

@Injectable()
export class BucketService {
  private s3Client: S3Client;
  private readonly bucket: string;
  private readonly baseUrl: string;

  constructor(configService: ConfigService) {
    const config = configService.getConfig();

    this.bucket = config.AWS_S3_BUCKET;
    this.baseUrl = `https://${this.bucket}.s3.${config.AWS_REGION}.amazonaws.com`;
    this.s3Client = new S3Client({
      region: config.AWS_REGION,
      apiVersion: 'latest',
      credentials: {
        accessKeyId: config.IAM_USER_ACCESS_KEY,
        secretAccessKey: config.IAM_USER_SECRET_KEY,
      },
    });
  }

  async putObject({ path, file }: PutObjectParams) {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: path,
      Body: file.buffer,
    });

    await this.s3Client.send(command);

    return `${this.baseUrl}/${path}`;
  }

  deleteObject({ path }: { path: string }) {
    const command = new DeleteObjectCommand({ Bucket: this.bucket, Key: path });

    return this.s3Client.send(command);
  }
}
