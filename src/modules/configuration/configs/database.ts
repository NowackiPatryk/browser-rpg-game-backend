import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/modules/users/user.entity";

require('dotenv').config();

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    User,
  ],
  autoLoadEntities: true,
  synchronize: true,
};

export default databaseConfig;
