export class CalcularParcelamentoRequestDto {
  dataCompra: Date;
  dataEntrega: Date;
  valorTotal: number;
  estaInadimplente: boolean;
}
