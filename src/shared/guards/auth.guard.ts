import { WalletService } from './../services/wallet.service';
import { LogType } from './../utility/enums';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoggingService } from '../../logger/logging.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private logger: LoggingService,
    private readonly walletService: WalletService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.body.signature || !request.body.address) {
      this.logger.log({
        type: LogType.ERROR,
        message: 'No token provided for auth request',
      });

      throw new UnauthorizedException({
        message: 'No auth token provided',
        code: 'Invalid signature',
      });
    }

    // return this.walletService.verifySigner(address, signature);
    return true;
  }
}
