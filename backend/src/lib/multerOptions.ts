// import HttpError from 'exception/HttpError';
import { HttpException, HttpStatus } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

export const multerOptions = {
  fileFilter: (request, file, callback) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|svg|gif)$/)) {
      // 이미지 형식은 jpg, jpeg, png만 허용합니다.
      callback(null, true);
    } else {
      callback(
        new HttpException(
          '지원하지 않는 이미지 형식입니다.',
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },

  storage: diskStorage({
    destination: (request, file, callback) => {
      const uploadPath = 'public';

      if (!existsSync(uploadPath)) {
        // public 폴더가 존재하지 않을시, 생성합니다.
        mkdirSync(uploadPath);
      }

      callback(null, uploadPath);
    },

    filename: (request, file, callback) => {
      callback(null, `${uuidv4()}|${file.originalname}`);
    },
  }),
};

export const createImageURL = (file): { url: string; path: string } => {
  const serverAddress = 'http://localhost:4000';

  return {
    url: `${serverAddress}/public/${file.filename}`,
    path: `/public/${file.filename}`,
  };
};
