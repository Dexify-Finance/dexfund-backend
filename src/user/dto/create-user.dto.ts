import { IsNotEmpty, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ADDRESS_LENGTH } from '../utility/user-constants';

export class CreateUserDto {
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
  signature: string;
}
