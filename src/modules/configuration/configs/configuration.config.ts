import { env } from 'process';

const configuration = () => ({
  version: env.npm_package_version,
  mode: env.MODE || 'development',
  nodeEnv: env.NODE_ENV || 'development',
  port: Number(env.PORT) || 3000,
});

export default configuration;

export type Env = ReturnType<typeof configuration>;
