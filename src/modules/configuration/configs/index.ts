import { IConfig } from '../interfaces/config.interface';
import api from './api';
import database from './database';
import session from './session';

const config: IConfig = {
  api,
  database,
  session,
};

export default config;
