import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FilesService } from './files.service';
import { createUploadInterceptor } from 'src/core/config/multer.config';
import { Public } from 'src/core/decorators/customize';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Public()
  @Post('upload')
  @UseInterceptors(createUploadInterceptor('fileUpload'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      fileName: file.filename
    }
  }
}
