import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/CreateUserDto.dto';
import { User } from './user.entity';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(payload: CreateUserDto): Promise<void> {
    const hashedPass = hashSync(payload.password, 10);

    this.usersRepository.save({
      ...payload,
      password: hashedPass,
    });
  }
}
