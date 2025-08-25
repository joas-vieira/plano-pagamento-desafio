import { Logger } from '@nestjs/common';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from 'src/modules/configuration/services/config.service';

export const boot = async (app: NestFastifyApplication) => {
  const configService = app.get(ConfigService);

  const port = configService.get<number>('port');

  await app.startAllMicroservices();

  await app.listen(port, () => {
    Logger.log(`Server running on port ${port}`);
  });
};
