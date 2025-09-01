import { env } from 'process';

const configuration = () => ({
  version: env.npm_package_version,
  mode: env.MODE || 'development',
  nodeEnv: env.NODE_ENV || 'development',
  port: Number(env.PORT) || 3000,
  database: {
    default: {
      host: env.DEFAULT_DATABASE_HOST,
      port: Number(env.DEFAULT_DATABASE_PORT),
      username: env.DEFAULT_DATABASE_USERNAME,
      password: env.DEFAULT_DATABASE_PASSWORD,
      database: env.DEFAULT_DATABASE_NAME,
      timeout: Number(env.DEFAULT_DATABASE_TIMEOUT),
    },
  },
});

export default configuration;

export type Env = ReturnType<typeof configuration>;
