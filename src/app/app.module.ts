import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/modules/configuration/configuration.module';

@Module({
  imports: [ConfigurationModule],
})
export class AppModule {}
