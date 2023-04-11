import { Controller, Get, Post, Query, Body, Patch, Param, Delete } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundOverviewDto, FundOverviewWithHistoryDto } from './dto/fund.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  findAll() {
    return this.fundService.getAllFunds();
  }
  
  @Get('/top-dexfunds')
  getTopDexfund() {
    return this.fundService.getTopFunds();
  }

  @Get(':id')
  getFundOverview(@Param() params: FundOverviewDto) {
    return this.fundService.getFundOverview(params.id);
  }

  @Get(':id/history')
  getFundOverviewWithHistory(@Param('id') id: string, @Query() query: FundOverviewWithHistoryDto) {
    return this.fundService.getFundOverviewWithHistory(id, query.timeRange);
  }

  @Get(':id/chart')
  getFundChart(@Param('id') id: string, @Query() query: FundOverviewWithHistoryDto) {
    return this.fundService.getFundChartData(id, query.timeRange);
  }

}
