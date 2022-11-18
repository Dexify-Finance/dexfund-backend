import { BucketService } from './../shared/services/bucket.service';
import { WalletService } from './../shared/services/wallet.service';
import { LogType } from './../shared/utility/enums';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoggingService } from '../logger/logging.service';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private logger: LoggingService,
    private readonly walletService: WalletService,
    private readonly bucketService: BucketService,
  ) {}

  async getUser(address: string, signature: string) {
    this.walletService.verifySigner(address, signature);
    const user = await this.findOneUserByAddress(address);
    if (user) {
      this.logger.log({
        type: LogType.INFO,
        message: `User found: address is ${user.address}`,
      });
      return user;
    }

    this.logger.log({
      type: LogType.WARN,
      message: 'User not found',
    });
    return {};
  }

  async update(updateUserDto: UpdateUserDto, file: Express.Multer.File) {
    this.walletService.verifySigner(
      updateUserDto.address,
      updateUserDto.signature,
    );
    let imageUrl: string;
    if (file) {
      imageUrl = await this.uploadImageToS3(file);
    }
    delete updateUserDto.signature;
    delete updateUserDto.file;
    const user = await this.findOneUserByAddress(updateUserDto.address);
    if (user) {
      await this.userRepository.update(
        {
          address: updateUserDto.address,
        },
        { ...updateUserDto, image: imageUrl ?? '' },
      );

      return this.findOneUserByAddress(updateUserDto.address);
    }
    return this.createNewUser({ ...updateUserDto, image: imageUrl ?? '' });
  }

  private async createNewUser(data: any): Promise<User> {
    return await this.userRepository.save(data);
  }

  private async findOneUserByAddress(address: string) {
    this.walletService.veryfyAddress(address);
    return await this.userRepository.findOneBy({ address });
  }

  private async uploadImageToS3(file: Express.Multer.File) {
    try {
      const extension = file.originalname.split('.').pop();
      const filePath = `avatar-${Date.now().toString()}.${extension}`;
      const fileUrl = await this.bucketService.putObject({
        path: filePath,
        file,
      });
      return fileUrl;
    } catch (err) {
      this.logger.log({
        type: LogType.ERROR,
        message: `Failed to upload media [${file.originalname}], size: [${file.size}] to s3`,
      });

      throw new InternalServerErrorException('Failed to upload image');
    }
  }
}
