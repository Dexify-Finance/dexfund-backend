import {
  checkFileExtensionIsAllowedImage,
  allowedImageExtensions,
  checkFileIsImage,
} from './../utility/file-type-check';
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ImageValidationPipe implements PipeTransform<Express.Multer.File> {
  transform(
    data: Express.Multer.File | Record<string, Express.Multer.File[]>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _metadata: ArgumentMetadata,
  ) {
    if (this.isInstanceOfFile(data)) {
      this.validateFile(data);
    } else {
      Object.values(data).forEach((images) =>
        images.forEach((image) => this.validateFile(image)),
      );
    }

    return data;
  }

  validateFile(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No image specified');
    }
    const extension = file.originalname.split('.').pop();
    if (!checkFileExtensionIsAllowedImage(extension)) {
      throw new BadRequestException(
        `Incorrect image extension. Supported extensions are ${allowedImageExtensions.join(
          ' ',
        )}`,
      );
    }

    if (!checkFileIsImage(file.buffer)) {
      throw new BadRequestException('Incorrect image binary');
    }
  }

  isInstanceOfFile(
    object: Express.Multer.File | Record<string, Express.Multer.File[]>,
  ): object is Express.Multer.File {
    return object.buffer instanceof Buffer;
  }
}
