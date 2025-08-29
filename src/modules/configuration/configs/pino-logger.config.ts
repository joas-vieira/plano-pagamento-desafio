import { Params } from 'nestjs-pino';
import { pinoPrettyConfig } from './pino-pretty.config';
import { ConfigService } from '../services/config.service';

export const pinoLoggerConfig = (configService: ConfigService): Params => {
  const mode = configService.get<string>('mode');
  const nodeEnv = configService.get<string>('nodeEnv');

  const isDevelopment = mode === 'development';
  const isTesting = nodeEnv === 'test';

  return {
    pinoHttp: {
      level: isTesting ? 'silent' : 'trace',
      transport: isDevelopment ? pinoPrettyConfig : undefined,
      autoLogging: true,
    },
  };
};
