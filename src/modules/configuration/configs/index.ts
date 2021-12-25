import { IConfig } from '../interfaces/config.interface';
import api from './api';
import database from './database';

const config: IConfig = {
  api,
  database,
};

export default config;
