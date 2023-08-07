import { Module } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundController } from './fund.controller';
import { GraphqlModule } from 'src/graphql/graphql.module';
import { CurrencyModule } from 'src/currency/currency.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fund } from './entity/fund.entity';
import { SharedModule } from 'src/shared/shared.module';
import { PortfolioAsset } from './entity/portfolio.entity';
import { FundInvestor } from './entity/investor.entity';
import { FundAction } from './entity/fund-action.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fund, PortfolioAsset, FundInvestor, FundAction]),
    SharedModule,
    GraphqlModule,
    CurrencyModule,
  ],
  controllers: [FundController],
  providers: [FundService],
  exports: [FundService]
})
export class FundModule {}
