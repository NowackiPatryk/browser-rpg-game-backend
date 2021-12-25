import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IApi } from './api.interface';

export interface IConfig {
  api: IApi,
  database: TypeOrmModuleOptions,
}
