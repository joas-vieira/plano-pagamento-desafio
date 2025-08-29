import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app/app.module';
import { configApp } from '../../app/kernel/config-app';

export async function createTestingModule(): Promise<NestFastifyApplication> {
  const module = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = module.createNestApplication<NestFastifyApplication>();

  configApp(app);

  return app;
}
