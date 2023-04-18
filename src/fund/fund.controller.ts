import { Controller, Get, Post, Query, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundOverviewDto, FundOverviewWithHistoryDto } from './dto/fund.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateFundDto } from './dto/update-fund.dto';
import { ImageValidationPipe } from 'src/user/pipes/file-type.pipe';
import { Fund } from './entity/fund.entity';

@ApiTags('Fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  findAll() {
    return this.fundService.getAllFunds();
  }

  @Get('/meta')
  getAllFundMeta() {
    return this.fundService.findAllMeta();
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

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  createOrUpdate(
    @Body() updateUserDto: UpdateFundDto,
    @UploadedFile(ImageValidationPipe) file?: Express.Multer.File,
  ): Promise<Fund> {
    return this.fundService.createOrUpdate(updateUserDto, file);
  }

}
