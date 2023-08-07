import { Controller, Get, Post, Query, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundOverviewDto, FundOverviewWithHistoryDto } from './dto/fund.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateFundDto } from './dto/update-fund.dto';
import { ImageValidationPipe } from 'src/user/pipes/file-type.pipe';
import { Fund, FundCategoryType } from './entity/fund.entity';

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

  @Get('/funds/:category')
  getFundsByCategory(@Param('category') category: FundCategoryType, @Query('limit') limit: number, @Query('skip') skip: number) {
    return this.fundService.getFundsByCategory(category, limit, skip);
  }

  @Get(':id')
  getFund(@Param() params: FundOverviewDto) {
    return this.fundService.getFund(params.id);
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  updateFund(
    @Body() updateUserDto: UpdateFundDto,
    @UploadedFile(ImageValidationPipe) file?: Express.Multer.File,
  ): Promise<Fund> {
    return this.fundService.updateFund(updateUserDto, file);
  }

  @Get('fund-action/:address')
  getFundActions(@Param('address') fundAddress: string, @Query('take') take: number, @Query('skip') skip: number) {
    return this.fundService.getFundAction(fundAddress, take, skip);
  }

  @Get('fund-action-buy-user/:address')
  getFundActionsByUser(@Param('address') fundAddress: string, @Query('user') user: string,  @Query('take') take: number, @Query('skip') skip: number) {
    return this.fundService.getFundActionByUser(fundAddress, user, take, skip);
  }

}
