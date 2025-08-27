import { Body, Controller, Post } from '@nestjs/common';
import { CalcularParcelamentoRequestDto } from './dtos/request/calcular-parcelamento.dto';
import { CalcularParcelamentoResponseDto } from './dtos/response/calcular-parcelamento.dto';
import { CalcularParcelaService } from './services/calcular-parcela.service';

@Controller('pedido')
export class PedidoController {
  constructor(
    private readonly calcularParcelaService: CalcularParcelaService,
  ) {}

  @Post('calcular-parcelamento')
  calcularParcelamento(
    @Body() body: CalcularParcelamentoRequestDto,
  ): CalcularParcelamentoResponseDto[] {
    const parcelas = this.calcularParcelaService.execute(body);

    return parcelas.map(
      (parcela) => new CalcularParcelamentoResponseDto(parcela),
    );
  }
}
