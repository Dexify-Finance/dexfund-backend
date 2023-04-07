import { Module } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundController } from './fund.controller';
import { GraphqlModule } from 'src/graphql/graphql.module';
import { CurrencyModule } from 'src/currency/currency.module';

@Module({
  imports: [GraphqlModule, CurrencyModule],
  controllers: [FundController],
  providers: [FundService],
})
export class FundModule {}
