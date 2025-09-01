import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LoggerModule } from 'nestjs-pino';
import configuration from './configs/configuration.config';
import { JwtConfig } from './configs/jwt.config';
import { pinoLoggerConfig } from './configs/pino-logger.config';
import { ConfigService } from './services/config.service';
import { validateVariables } from './utils/validate-variables';

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
    JwtModule.registerAsync({ global: true, useClass: JwtConfig }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigurationModule {}
