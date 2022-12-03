import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { WishList } from '../../entities/wish-list.entity';
import { WishListController } from './wish-list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WishList, User])],
  controllers: [WishListController],
})
export class WishListModule {}
