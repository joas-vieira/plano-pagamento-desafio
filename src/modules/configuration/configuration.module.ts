import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import configuration from './configs/configuration.config';
import { pinoLoggerConfig } from './configs/pino-logger.config';
import { validateVariables } from './utils/validate-variables';
import { ConfigService } from './services/config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate: validateVariables,
    }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: pinoLoggerConfig,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigurationModule {}
