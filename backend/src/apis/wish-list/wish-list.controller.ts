import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { WishList } from '../../entities/wish-list.entity';
import { createImageURL, multerOptions } from '../../lib/multerOptions';
import {
  CreateWishListReq,
  FindWishListDetailRes,
  FindWishListRes,
} from './wish-list.dto';

@ApiTags('WishList')
@Controller('wish-list')
export class WishListController {
  constructor(
    @InjectRepository(WishList)
    private readonly wishListRepository: Repository<WishList>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @ApiOperation({ summary: 'wishlist 가져옴' })
  @ApiParam({ name: 'userId', type: String })
  @ApiResponse({ type: FindWishListRes, status: HttpStatus.OK })
  @Get('/:userId')
  async getWishList(
    @Param('userId') kakaoId: string,
  ): Promise<FindWishListRes> {
    const user = await this.userRepository.findOne({
      where: {
        kakaoId: kakaoId,
      },
    });

    const wishLists = await this.wishListRepository.find({
      where: {
        userId: user.id,
      },
      order: {
        id: 'ASC',
      },
    });

    return {
      data: wishLists.map((wishList) => ({
        id: wishList.id,
        // http://10.10.4.181:4000/docs
        image: `http://10.10.4.181:4000${wishList.imagePath}`,
        link: wishList.link,
        title: wishList.title,
        description: wishList.description,
      })),
    };
  }

  @ApiOperation({ summary: 'wishlist 상세 가져옴' })
  @ApiParam({ name: 'wishItemId', type: Number })
  @ApiResponse({ type: FindWishListDetailRes, status: HttpStatus.OK })
  @Get(':wishItemId/detail')
  async getWishListDetail(
    @Param('wishItemId', ParseIntPipe) wishItemId: number,
  ): Promise<FindWishListDetailRes> {
    const wishList = await this.wishListRepository.findOneOrFail({
      where: {
        id: wishItemId,
      },
    });

    const user = await this.userRepository.findOneOrFail({
      where: {
        id: wishList.userId,
      },
    });
    return {
      id: wishList.id,
      // http://10.10.4.181:4000/docs
      image: `http://10.10.4.181:4000${wishList.imagePath}`,
      link: wishList.link,
      title: wishList.title,
      description: wishList.description,
      userId: user.kakaoId,
    };
  }

  @ApiOperation({ summary: 'wishlist 등록' })
  @ApiParam({ name: 'userId', type: String })
  @Post('/:userId')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @ApiBody({ type: CreateWishListReq, required: true })
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.CREATED)
  async createWishList(
    @Param('userId') kakaoId: string,
    @Body() { link, title, description }: Omit<CreateWishListReq, 'file'>,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const user = await this.userRepository.findOne({
      where: {
        kakaoId: kakaoId,
      },
    });

    const { path } = createImageURL(file);

    await this.wishListRepository.insert({
      imagePath: path,
      link,
      title,
      description,
      userId: user.id,
    });
  }

  @ApiOperation({ summary: 'wishlist 수정' })
  @ApiParam({ name: 'userId', type: String })
  @ApiParam({ name: 'wishItemId', type: Number })
  @Put('/:userId/:wishItemId')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @ApiBody({ type: CreateWishListReq, required: true })
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.NO_CONTENT)
  async modifyWishList(
    @Param('userId') kakaoId: string,
    @Param('wishItemId', ParseIntPipe) wishItemId: number,
    @Body() { link, title, description }: Omit<CreateWishListReq, 'file'>,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const user = await this.userRepository.findOne({
      where: {
        kakaoId: kakaoId,
      },
    });

    const wishList = await this.wishListRepository.findOne({
      where: {
        userId: user.id,
        id: wishItemId,
      },
    });

    if (!wishList) {
      throw new NotFoundException();
    }

    const { path } = createImageURL(file);

    await this.wishListRepository.update(
      { id: wishItemId, userId: user.id },
      {
        imagePath: path,
        link,
        title,
        description,
      },
    );
  }

  @ApiOperation({ summary: 'wishlist 삭제' })
  @ApiParam({ name: 'userId', type: String })
  @ApiParam({ name: 'wishItemId', type: Number })
  @Delete('/:userId/:wishItemId')
  @HttpCode(HttpStatus.OK)
  async deleteWishList(
    @Param('userId') kakaoId: string,
    @Param('wishItemId') wishItemId: number,
  ) {
    const user = await this.userRepository.findOne({
      where: {
        kakaoId: kakaoId,
      },
    });

    await this.wishListRepository.delete({
      id: wishItemId,
      userId: user.id,
    });
  }
}
