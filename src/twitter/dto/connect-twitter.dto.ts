import { ADDRESS_LENGTH } from './../../utils/constants';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class ConnectTwitterDto {
  @ApiProperty({ required: true })
  @Expose()
  @IsNotEmpty()
  @MaxLength(ADDRESS_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  address: string;

  @ApiProperty({ required: true })
  @Expose()
  @IsNotEmpty()
  signature: string;

  @ApiProperty({ required: true })
  @Expose()
  @IsNotEmpty()
  oauth_token: string;

  @ApiProperty({ required: true })
  @Expose()
  @IsNotEmpty()
  oauth_token_secret: string;

  @ApiProperty({ required: true })
  @Expose()
  @IsNotEmpty()
  oauth_verifier: string;
}
