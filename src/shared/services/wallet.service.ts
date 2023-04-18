import { LogType } from './../utility/enums';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class WalletService {
  private readonly logger = new Logger(WalletService.name);
  constructor() {}

  verifySigner(address: string, signature: string) {
    if (!signature || !address) {
      this.logger.error('No token provided for auth request');

      throw new UnauthorizedException({
        message: 'No auth token provided',
        code: 'Invalid signature',
      });
    }

    const signerAddr = ethers.utils.verifyMessage(address, signature);
    
    if (signerAddr !== address) {
      this.logger.error('No token provided for auth request');

      throw new UnauthorizedException({
        message: 'Failed to verify address.',
        code: 'Invalid signature',
      });
    }
    return true;
  }

  verifyAddress(address: string) {
    if (ethers.utils.isAddress(address)) return;

    this.logger.error('The address type is invalid.');
    throw new BadRequestException('Invalid Address');
  }
}
