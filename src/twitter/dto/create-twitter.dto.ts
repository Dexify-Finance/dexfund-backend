import { ADDRESS_LENGTH } from './../../utils/constants';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTwitterDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @MaxLength(ADDRESS_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  address: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @MaxLength(ADDRESS_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  fundAddress: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  signature: string;

  @ApiProperty()
  @Expose()
  twitterName: string;

  @ApiProperty()
  @Expose()
  twitterScreenName: string;

  @ApiProperty()
  @Expose()
  twitterImage: string;
}
