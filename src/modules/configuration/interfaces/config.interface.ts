import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IApi } from './api.interface';
import { ISession } from './session.interface';

export interface IConfig {
  api: IApi,
  database: TypeOrmModuleOptions,
  session: ISession,
}
