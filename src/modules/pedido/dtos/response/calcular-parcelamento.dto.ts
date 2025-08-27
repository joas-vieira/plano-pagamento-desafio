import { CalcularParcelaServiceResponse } from '@modules/pedido/services/calcular-parcela.service';

export class CalcularParcelamentoResponseDto {
  numeroParcela: number;
  valorParcela: number;
  dataVencimento: Date;

  constructor(parcela: CalcularParcelaServiceResponse) {
    this.numeroParcela = parcela.numeroParcela;
    this.valorParcela = parcela.valorParcela;
    this.dataVencimento = parcela.dataVencimento;
  }
}
