import { ADDRESS_LENGTH } from './../../utils/constants';
import { MAX_BIO_LENGTH, MAX_NAME_LENGTH } from './../utility/user-constants';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MAX_TITLE_LENGTH } from '../utility/user-constants';
export class UpdateUserDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @MaxLength(ADDRESS_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  address: string;

  @ApiProperty({required: false})
  @Expose()
  // @IsNotEmpty()
  signature: string;

  @ApiProperty({ required: false })
  @Expose()
  email: string;

  @ApiProperty({ required: false })
  @Expose()
  @MaxLength(MAX_TITLE_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  title: string;
  @ApiProperty({ required: false })
  @Expose()
  @MaxLength(MAX_BIO_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  bio: string;

  @ApiProperty({ required: false })
  @Expose()
  @MaxLength(MAX_NAME_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  name: string;

  @ApiProperty({ required: false })
  @Expose()
  twitterName: string;

  @ApiProperty({ required: false })
  @Expose()
  twitterScreenName: string;

  @ApiProperty({ required: false })
  @Expose()
  twitterImage: string;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  file: Express.Multer.File;
}
