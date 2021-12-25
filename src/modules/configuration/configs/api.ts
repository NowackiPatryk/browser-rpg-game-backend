import { IApi } from '../interfaces/api.interface';

require('dotenv').config();

const apiConfig: IApi = {
  port: parseInt(process.env.API_PORT, 10) || 3000,
};

export default apiConfig;