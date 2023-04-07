import { WalletService } from './../services/wallet.service';
import { LogType } from './../utility/enums';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(
    private readonly walletService: WalletService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.body.signature || !request.body.address) {
      this.logger.error('No token provided for auth request');

      throw new UnauthorizedException({
        message: 'No auth token provided',
        code: 'Invalid signature',
      });
    }

    // return this.walletService.verifySigner(address, signature);
    return true;
  }
}
