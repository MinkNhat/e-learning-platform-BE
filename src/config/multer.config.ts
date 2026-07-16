import { HttpException, HttpStatus } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import fs from 'fs';
import { diskStorage } from "multer";
import path, { join } from "path";
import { Request } from "express";

export interface UploadOptions {
    allowedMimeTypes?: string[];
    allowedExtensions?: string[];
    maxFileSize?: number;
    required?: boolean;
    customFilename?: (req: Request, file: Express.Multer.File, originalName?: string) => string;
    folder?: string | ((req: Request) => string);
}

const getRootPath = () => {
    return process.cwd();
};

const getUploadRootPath = () => {
    const uploadPath = process.env.UPLOAD_PATH || 'upload';
    return path.isAbsolute(uploadPath) ? uploadPath : join(getRootPath(), uploadPath);
};

const ensureExists = (targetDirectory: string) => {
    fs.mkdirSync(targetDirectory, { recursive: true });
};

const fileFilterValidator = (
    file: Express.Multer.File,
    allowedExtensions?: string[],
    allowedMimeTypes?: string[],
    maxFileSize?: number,
) => {
    const ext = file.originalname.split('.').pop()?.toLowerCase();

    if (allowedExtensions && ext && !allowedExtensions.includes(ext)) {
        throw new HttpException(
            `Invalid file type. Allowed: ${allowedExtensions.join(', ')}`,
            HttpStatus.UNPROCESSABLE_ENTITY,
        );
    }

    if (allowedMimeTypes && !allowedMimeTypes.includes(file.mimetype)) {
        throw new HttpException(
            `Invalid MIME type. Allowed: ${allowedMimeTypes.join(', ')}`,
            HttpStatus.UNPROCESSABLE_ENTITY,
        );
    }

    if (maxFileSize && file.size > maxFileSize) {
        const maxSizeMB = (maxFileSize / (1024 * 1024)).toFixed(2);
        throw new HttpException(
            `File size exceeds limit of ${maxSizeMB}MB`,
            HttpStatus.UNPROCESSABLE_ENTITY,
        );
    }
};

export function createUploadInterceptor(
    fieldName: string,
    options: UploadOptions = {},
) {
    const allowedMimeTypes = options.allowedMimeTypes;
    const allowedExtensions = options.allowedExtensions ?? ['jpg', 'jpeg', 'png', 'webp', 'gif', 'pdf', 'doc', 'docx', 'mp4', 'mpeg', 'avi'];
    const maxFileSize = options.maxFileSize ?? (1024 * 1024 * 10);
    const customFilename = options.customFilename;
    const folder = options.folder ?? 'default';

    return FileInterceptor(fieldName, {
        storage: diskStorage({
            destination: (req: Request, file: Express.Multer.File, cb) => {
                const folderName = typeof folder === 'function' ? folder(req) : folder;
                const targetDir = join(getUploadRootPath(), folderName);

                try {
                    ensureExists(targetDir);
                    cb(null, targetDir);
                } catch (error) {
                    cb(error, targetDir);
                }
            },
            filename: (req: Request, file: Express.Multer.File, cb) => {
                if (customFilename) {
                    cb(null, customFilename(req, file));
                } else {
                    const ext = path.extname(file.originalname);
                    const base = path.basename(file.originalname, ext);
                    cb(null, `${base}-${Date.now()}${ext}`);
                }
            },
        }),
        fileFilter: (req: Request, file: Express.Multer.File, cb) => {
            try {
                fileFilterValidator(file, allowedExtensions, allowedMimeTypes, maxFileSize);
                cb(null, true);
            } catch (error) {
                cb(error, false);
            }
        },
        limits: {
            fileSize: maxFileSize,
        },
    });
}
