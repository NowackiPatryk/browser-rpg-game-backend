import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CharactersService } from '../character/characters.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly charactersService: CharactersService,
  ) {}

  @Post()
  async register(@Body() payload: CreateUserDto) {
    if (payload.password !== payload.confirmPassword) {
      throw new BadRequestException('Passwords are not equal!');
    }

    const { id, email } = await this.usersService.create(payload);

    await this.charactersService.create({
      userId: id,
      nick: email + '-character',
    });
  }
}
