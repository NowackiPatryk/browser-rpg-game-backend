import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUserDto.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async register(@Body() payload: CreateUserDto) {
    if (payload.password !== payload.confirmPassword) {
      throw new BadRequestException('Passwords are not equal!');
    }

    return this.usersService.create(payload);
  }
}
