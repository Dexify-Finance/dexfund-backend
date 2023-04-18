import { Module } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundController } from './fund.controller';
import { GraphqlModule } from 'src/graphql/graphql.module';
import { CurrencyModule } from 'src/currency/currency.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fund } from './entity/fund.entity';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fund]),
    SharedModule,
    GraphqlModule,
    CurrencyModule,
  ],
  controllers: [FundController],
  providers: [FundService],
})
export class FundModule {}
