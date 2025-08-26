import { dayjs } from '@common/libs/dayjs.lib';

interface CalcularParcelaServiceRequest {
  dataCompra: Date;
  dataEntrega: Date;
  estaInadimplente: boolean;
}

interface CalcularParcelaServiceResponse {
  dataVencimento: Date;
}

export class CalcularParcelaService {
  execute({
    dataCompra,
    dataEntrega,
    estaInadimplente,
  }: CalcularParcelaServiceRequest): CalcularParcelaServiceResponse[] {
    return [];
  }

  private obterDiaVencimento(dataCompra: Date): number {
    const diaCompra = dayjs.utc(dataCompra).date();

    if (diaCompra >= 1 && diaCompra <= 5) return 5;

    if (diaCompra >= 6 && diaCompra <= 10) return 10;

    if (diaCompra >= 11 && diaCompra <= 20) return 20;

    return 5;
  }
}
