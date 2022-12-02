import { User } from './entities/user.entity';
import { ImageValidationPipe } from './pipes/file-type.pipe';
import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Query('address') address: string) {
    return this.userService.getUser(address);
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  createOrUpdate(
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile(ImageValidationPipe) file?: Express.Multer.File,
  ): Promise<User> {
    return this.userService.createOrUpdate(updateUserDto, file);
  }
}
