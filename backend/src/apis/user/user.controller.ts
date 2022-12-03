import { Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  @ApiOperation({ description: 'singin' })
  @ApiParam({ name: 'kakaoId', type: String })
  @Post('/sign-in/:kakaoId')
  async signinUser(@Param('kakaoId') kakaoId: string) {
    const user = await this.userRepository.findOne({
      where: {
        kakaoId: kakaoId,
      },
    });

    if (!user) {
      console.log('hihi');
      await this.userRepository.insert({
        kakaoId,
      });
    }
  }
}
