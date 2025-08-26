import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { CalcularParcelaService } from './services/calcular-parcela.service';

@Module({
  imports: [],
  controllers: [PedidoController],
  providers: [CalcularParcelaService],
})
export class PedidoModule {}
