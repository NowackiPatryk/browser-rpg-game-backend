import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}

  async validateUser(email: string, password: string): Promise<number | null> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user || !compareSync(password, user.password)) {
      return null;
    }

    return user.id;
  }
}
