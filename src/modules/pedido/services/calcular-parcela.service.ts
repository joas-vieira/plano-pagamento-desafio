import { dayjs } from '@common/libs/dayjs.lib';
import { truncateDecimal } from '@common/utils/truncate-decimal';
import { Logger } from '@nestjs/common';

interface CalcularParcelaServiceRequest {
  dataCompra: Date;
  dataEntrega: Date;
  valorTotal: number;
  estaInadimplente: boolean;
}

export interface CalcularParcelaServiceResponse {
  numeroParcela: number;
  valorParcela: number;
  dataVencimento: Date;
}

export class CalcularParcelaService {
  private readonly logger = new Logger(CalcularParcelaService.name);

  execute({
    dataCompra,
    dataEntrega,
    valorTotal,
    estaInadimplente,
  }: CalcularParcelaServiceRequest): CalcularParcelaServiceResponse[] {
    this.logger.log('Iniciando cálculo das parcelas');

    const parcelas: CalcularParcelaServiceResponse[] = [];

    const diaVencimento = this.obterDiaVencimento(dataCompra);
    const numeroParcelas = this.calcularNumeroParcelas(
      dataCompra,
      dataEntrega,
      estaInadimplente,
    );
    const valorParcela = truncateDecimal(valorTotal / numeroParcelas);

    this.logger.log(`Valor da parcela: ${valorParcela}`);
    this.logger.log(`Número de parcelas: ${numeroParcelas}`);
    this.logger.log(`Dia de vencimento: ${diaVencimento}`);

    const dataBasePrimeiraParcela = dayjs.utc(dataCompra).add(2, 'day');
    const dataPrimeiraParcela = this.ajustarParaProximoDiaUtil(
      dataBasePrimeiraParcela.toDate(),
    );

    this.logger.log(
      `Data de vencimento da primeira parcela: ${dataPrimeiraParcela.toISOString()}`,
    );

    parcelas.push({
      numeroParcela: 1,
      valorParcela,
      dataVencimento: dataPrimeiraParcela,
    });

    for (
      let numeroParcela = 2;
      numeroParcela <= numeroParcelas;
      numeroParcela++
    ) {
      const ultimaDataParcela = parcelas[numeroParcela - 2].dataVencimento;
      const mesesParaAdicionar = this.calcularMesesParaAdicionar(
        numeroParcela,
        dataPrimeiraParcela,
      );

      const dataBaseParcela = dayjs
        .utc(ultimaDataParcela)
        .add(mesesParaAdicionar, 'month')
        .date(diaVencimento);
      const dataParcela = this.ajustarParaProximoDiaUtil(
        dataBaseParcela.toDate(),
      );

      parcelas.push({
        numeroParcela,
        valorParcela,
        dataVencimento: dataParcela,
      });
    }

    this.logger.log('Cálculo das parcelas finalizado');

    return parcelas;
  }

  private obterDiaVencimento(dataCompra: Date): number {
    const diaCompra = dayjs.utc(dataCompra).date();

    if (diaCompra >= 1 && diaCompra <= 5) return 5;
    if (diaCompra >= 6 && diaCompra <= 10) return 10;
    if (diaCompra >= 11 && diaCompra <= 20) return 20;

    return 5;
  }

  private ajustarParaProximoDiaUtil(data: Date): Date {
    const dataDayjs = dayjs.utc(data);

    const diaSemana = dataDayjs.day();

    const ehDomingo = diaSemana === 0;
    const ehSabado = diaSemana === 6;

    if (ehDomingo) return dataDayjs.add(1, 'day').toDate();
    if (ehSabado) return dataDayjs.add(2, 'day').toDate();

    return dataDayjs.toDate();
  }

  private calcularNumeroParcelas(
    dataCompra: Date,
    dataEntrega: Date,
    estaInadimplente: boolean,
  ): number {
    const quantidadeParcelas =
      dayjs(dataEntrega).diff(dayjs(dataCompra), 'month') + 1;

    return estaInadimplente ? quantidadeParcelas : quantidadeParcelas + 3;
  }

  private calcularMesesParaAdicionar(
    numeroParcela: number,
    dataPrimeiraParcela: Date,
  ): number {
    const ehSegundaParcela = numeroParcela === 2;

    const primeiraParcelaNoFimDoMes =
      dayjs.utc(dataPrimeiraParcela).date() >=
      dayjs.utc(dataPrimeiraParcela).daysInMonth() - 10;

    if (ehSegundaParcela && primeiraParcelaNoFimDoMes) return 2;

    return 1;
  }
}
