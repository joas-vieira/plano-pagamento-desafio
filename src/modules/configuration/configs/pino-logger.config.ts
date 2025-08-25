import { Params } from 'nestjs-pino';
import { pinoPrettyConfig } from './pino-pretty.config';
import { ConfigService } from '../services/config.service';

export const pinoLoggerConfig = (configService: ConfigService): Params => {
  const mode = configService.get<string>('mode');

  const isDevelopment = mode === 'development';

  return {
    pinoHttp: {
      level: 'trace',
      transport: isDevelopment ? pinoPrettyConfig : undefined,
      autoLogging: true,
    },
  };
};
