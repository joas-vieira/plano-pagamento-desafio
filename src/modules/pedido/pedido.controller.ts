import { BAD_REQUEST } from '@common/docs/bad-request.doc';
import { INTERNAL_SERVER_ERROR } from '@common/docs/internal-server-error.doc';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CALCULAR_PARCELAMENTO } from './docs/calcular-parcelamento.doc';
import { CalcularParcelamentoRequestDto } from './dtos/request/calcular-parcelamento.dto';
import { CalcularParcelamentoResponseDto } from './dtos/response/calcular-parcelamento.dto';
import { ValidarDatasCompraEntregaPipe } from './pipes/validar-datas-compra-entrega.pipe';
import { CalcularParcelaService } from './services/calcular-parcela.service';

@Controller('pedido')
@ApiTags('Módulo Pedido')
@ApiResponse(BAD_REQUEST)
@ApiResponse(INTERNAL_SERVER_ERROR)
export class PedidoController {
  constructor(
    private readonly calcularParcelaService: CalcularParcelaService,
  ) {}

  @Post('calcular-parcelamento')
  @ApiOperation({ summary: 'Calcular parcelamento' })
  @ApiResponse(CALCULAR_PARCELAMENTO)
  @HttpCode(200)
  calcularParcelamento(
    @Body(ValidarDatasCompraEntregaPipe) body: CalcularParcelamentoRequestDto,
  ): CalcularParcelamentoResponseDto[] {
    const parcelas = this.calcularParcelaService.execute(body);

    return parcelas.map(
      (parcela) => new CalcularParcelamentoResponseDto(parcela),
    );
  }
}
