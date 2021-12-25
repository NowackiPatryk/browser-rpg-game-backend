import {
  Controller,
  Get,
  Post,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { session } from 'passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req, @Session() session) {
    session.userId = req.user;
  }

  @Get('/me')
  async getMe(@Session() session) {
    return {
      id: session.userId,
    };
  }

  @Post('/logout')
  async logout(@Session() session) {
    session.userId = undefined;
  }
}
