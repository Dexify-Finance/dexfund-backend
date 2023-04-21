import { ComptrollerDto } from './comptroller';
import { FundUserDto } from './fundUser';
import { PortfolioDto } from './portfolio';
import { ShareStateDto } from './share';
import { MonthlyStateDto } from './monthlyState';
import { FundCategoryType } from 'src/fund/entity/fund.entity';
export interface FundDto {
  id: string;
  name: string;
  accessor: ComptrollerDto;
  creator: FundUserDto;
  manager: FundUserDto;
  portfolio: PortfolioDto;
  inception: string;
  shares: ShareStateDto;

  image?: string;
  category?: FundCategoryType;
  description?: string;
  portfolioHistory?: PortfolioDto[];
  lastPortfolio?: PortfolioDto[];
  firstPortfolio?: PortfolioDto[];
  sharesHistory?: ShareStateDto[];
  lastShare?: ShareStateDto[];
  firstShare?: ShareStateDto[];

  monthlyStates?: MonthlyStateDto[];
}