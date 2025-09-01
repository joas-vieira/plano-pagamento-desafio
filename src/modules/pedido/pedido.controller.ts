import { BAD_REQUEST } from '@common/docs/bad-request.doc';
import { INTERNAL_SERVER_ERROR } from '@common/docs/internal-server-error.doc';
import { AuthGuard } from '@modules/autenticacao/guards/auth.guard';
import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CALCULAR_PARCELAMENTO } from './docs/calcular-parcelamento.doc';
import { CalcularParcelamentoRequestDto } from './dtos/request/calcular-parcelamento.dto';
import { CalcularParcelamentoResponseDto } from './dtos/response/calcular-parcelamento.dto';
import { ValidarDatasCompraEntregaPipe } from './pipes/validar-datas-compra-entrega.pipe';
import { CalcularParcelaService } from './services/calcular-parcela.service';

@Controller('pedidos')
@ApiTags('Módulo Pedido')
@UseGuards(AuthGuard)
@ApiBearerAuth('Authorization')
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
