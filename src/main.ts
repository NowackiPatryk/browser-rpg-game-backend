import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
  );

  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get<ConfigService>(ConfigService);

  app.use(
    session({
      secret: configService.get('session.secret'),
      resave: false,
      saveUninitialized: false,
    }),
  );

  const port = configService.get('api.port');

  await app.listen(port);
}
bootstrap();
