import { WalletService } from './../shared/services/wallet.service';
import { LogType } from './../shared/utility/enums';
import { BadRequestException, Injectable } from '@nestjs/common';
import { LoggingService } from '../logger/logging.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
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
  ) {}

  async getOrCreateUser(createUserDto: CreateUserDto) {
    this.walletService.veryfyAddress(createUserDto.address);
    const user = await this.userRepository.findOneBy({
      address: createUserDto.address,
    });

    if (user) {
      this.logger.log({
        type: LogType.INFO,
        location: UserService.name,
        message: `User found: address is ${user.address}`,
      });
      return user;
    } else {
      this.logger.log({
        type: LogType.WARN,
        location: UserService.name,
        message: 'User not found',
      });
      return this.createNewUser(createUserDto.address);
    }
  }

  private async createNewUser(address: string) {
    return await this.userRepository.save({ address });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(address: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${address} user`;
  }

  remove(address: string) {
    return `This action removes a #${address} user`;
  }
}
