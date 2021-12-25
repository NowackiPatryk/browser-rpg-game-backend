import { ISession } from "../interfaces/session.interface";

require('dotenv').config();

const sessionConfig: ISession = {
  secret: process.env.SESSION_SECRET,
};

export default sessionConfig;
