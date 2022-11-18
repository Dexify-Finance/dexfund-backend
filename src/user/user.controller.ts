import { ImageValidationPipe } from './pipes/file-type.pipe';
import { AuthGuard } from './../shared/guards/auth.guard';
import { User } from './entities/user.entity';
import { LogType } from './../shared/utility/enums';
import {
  Controller,
  Post,
  Body,
  Patch,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggingService } from 'src/logger/logging.service';
import { ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

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
      message: 'getOrCreateUser calling',
    });
    return this.userService.getOrCreateUser(createUserDto);
  }

  @Patch()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile(ImageValidationPipe) file: Express.Multer.File,
  ) {
    return this.userService.update(updateUserDto, file);
  }
}
