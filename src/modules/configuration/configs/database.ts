import { TypeOrmModuleOptions } from "@nestjs/typeorm";

require('dotenv').config();

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [],
  synchronize: true,
};

export default databaseConfig;
