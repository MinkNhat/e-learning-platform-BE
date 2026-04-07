import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/core/decorators/customize';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('fileUpload'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: /^(jpg|jpeg|image\/jpeg|png|image\/png|application\/pdf)$/i,
      })
      .addMaxSizeValidator({
        maxSize: 1024 * 1024 * 10,
      })
      .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      })
    ) file: Express.Multer.File
  ) {
    return {
      fileName: file.filename
    }
  }
}
