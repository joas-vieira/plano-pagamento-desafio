import { HealthModule } from '@modules/health/health.module';
import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/modules/configuration/configuration.module';
import { PedidoModule } from 'src/modules/pedido/pedido.module';

@Module({
  imports: [ConfigurationModule, HealthModule, PedidoModule],
})
export class AppModule {}
