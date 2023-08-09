import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { FundCategoryType } from '../entity/fund.entity';
import { IsNotEmpty } from 'class-validator';
export class UpdateFundDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  userAddress: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  signature: string;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  file: Express.Multer.File;

  @ApiProperty({ required: false })
  @Expose()
  category: number;

  @ApiProperty({ required: false })
  @Expose()
  description: string;
}
