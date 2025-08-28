/* eslint-disable @typescript-eslint/no-floating-promises */

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { boot } from './app/kernel/boot';
import { configApp } from './app/kernel/config-app';
import { configSwagger } from './app/kernel/config-swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  configApp(app);
  configSwagger(app);
  await boot(app);
}
bootstrap();
