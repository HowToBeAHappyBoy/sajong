import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entitys/user.entity';
import { WishList } from '../../entitys/wish-list.entity';
import { WishListController } from './wish-list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WishList, User])],
  controllers: [WishListController],
})
export class WishListModule {}
