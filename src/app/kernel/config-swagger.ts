import { ConfigService } from '@modules/configuration/services/config.service';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configSwagger = (app: NestFastifyApplication) => {
  const configService = app.get(ConfigService);

  const version = configService.get<string>('version');
  const mode = configService.get<string>('mode');

  if (mode === 'production') return;

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description')
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);
};
