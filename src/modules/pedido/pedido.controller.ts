import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CalcularParcelamentoRequestDto } from './dtos/request/calcular-parcelamento.dto';
import { CalcularParcelamentoResponseDto } from './dtos/response/calcular-parcelamento.dto';
import { CalcularParcelaService } from './services/calcular-parcela.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CALCULAR_PARCELAMENTO } from './docs/calcular-parcelamento.doc';

@Controller('pedido')
@ApiTags('Módulo Pedido')
export class PedidoController {
  constructor(
    private readonly calcularParcelaService: CalcularParcelaService,
  ) {}

  @Post('calcular-parcelamento')
  @ApiOperation({ summary: 'Calcular parcelamento' })
  @ApiResponse(CALCULAR_PARCELAMENTO)
  @HttpCode(200)
  calcularParcelamento(
    @Body() body: CalcularParcelamentoRequestDto,
  ): CalcularParcelamentoResponseDto[] {
    const parcelas = this.calcularParcelaService.execute(body);

    return parcelas.map(
      (parcela) => new CalcularParcelamentoResponseDto(parcela),
    );
  }
}
