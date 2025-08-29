import { ConfigurationModule } from '@modules/configuration/configuration.module';
import { HealthModule } from '@modules/health/health.module';
import { PedidoModule } from '@modules/pedido/pedido.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigurationModule, HealthModule, PedidoModule],
})
export class AppModule {}
