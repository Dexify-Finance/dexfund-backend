import { AuthGuard } from './../shared/guards/auth.guard';
import { User } from './entities/user.entity';
import { LogType } from './../shared/utility/enums';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggingService } from 'src/logger/logging.service';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggingService,
  ) {}

  @Post()
  getOrCreateUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    this.logger.log({
      type: LogType.WARN,
      location: UserController.name,
      message: 'getOrCreateUser calling',
    });
    return this.userService.getOrCreateUser(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') address: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(address, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') address: string) {
    return this.userService.remove(address);
  }
}
