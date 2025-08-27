import { CalcularParcelaServiceResponse } from '@modules/pedido/services/calcular-parcela.service';
import { ApiProperty } from '@nestjs/swagger';

export class CalcularParcelamentoResponseDto {
  @ApiProperty({
    description: 'Número da parcela',
    example: 1,
  })
  numeroParcela: number;

  @ApiProperty({
    description: 'Valor da parcela',
    example: 100,
  })
  valorParcela: number;

  @ApiProperty({
    description: 'Data de vencimento da parcela',
    example: '2023-01-03T00:00:00.000Z',
  })
  dataVencimento: Date;

  constructor(parcela: CalcularParcelaServiceResponse) {
    this.numeroParcela = parcela.numeroParcela;
    this.valorParcela = parcela.valorParcela;
    this.dataVencimento = parcela.dataVencimento;
  }
}
