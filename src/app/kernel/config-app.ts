import { LoggingInterceptor } from '@common/interceptors/logging.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';

export const configApp = (app: NestFastifyApplication) => {
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
};
