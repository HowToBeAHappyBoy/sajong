import { ApiProperty } from '@nestjs/swagger';

export class FindWishListDataRes {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  image: string;

  @ApiProperty({ type: String })
  link: string;

  @ApiProperty({ type: String })
  description: string;
}
export class FindWishListDetailRes extends FindWishListDataRes {
  @ApiProperty({ type: String })
  userId: string;
}

export class FindWishListRes {
  @ApiProperty({ type: FindWishListDataRes, isArray: true })
  data: FindWishListDataRes[];
}

export class CreateWishListReq {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  file: Pick<Express.Multer.File, 'originalname' | 'mimetype' | 'buffer'>;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  link: string;

  @ApiProperty({ type: String })
  description: string;
}
