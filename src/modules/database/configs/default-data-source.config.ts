import 'dotenv/config';
import { resolve } from 'node:path';
import { DataSource } from 'typeorm';

const path = resolve(__dirname, '..', '..');

export default new DataSource({
  type: 'postgres',
  host: process.env.DEFAULT_DATABASE_HOST,
  port: Number(process.env.DEFAULT_DATABASE_PORT),
  username: process.env.DEFAULT_DATABASE_USERNAME,
  password: process.env.DEFAULT_DATABASE_PASSWORD,
  database: process.env.DEFAULT_DATABASE_NAME,
  migrations: [`${path}/**/migrations/*.{ts,js}`],
  synchronize: false,
  uuidExtension: 'pgcrypto',
});
