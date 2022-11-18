import { LogType } from './../utility/enums';
import { LoggingService } from './../../logger/logging.service';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class WalletService {
  constructor(private readonly logger: LoggingService) {}

  verifyRequest(request: any) {
    const signerAddr = ethers.utils.verifyMessage(
      request.address,
      request.signature,
    );
    if (signerAddr !== request.address) {
      this.logger.log({
        type: LogType.ERROR,
        message: 'No token provided for auth request',
      });

      throw new UnauthorizedException({
        message: 'Failed to verify address.',
        code: 'Invalid signature',
      });
    }
    return true;
  }

  veryfyAddress(address: string) {
    if (ethers.utils.isAddress(address)) return;

    this.logger.log({
      type: LogType.ERROR,
      message: 'The wallet type for your Ethereum address is invalid.',
    });
    throw new BadRequestException('Invalid Wallet Address');
  }
}
