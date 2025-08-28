import { BadRequestException, PipeTransform } from '@nestjs/common';
import { CalcularParcelamentoRequestDto } from '../dtos/request/calcular-parcelamento.dto';

export class ValidarDatasCompraEntregaPipe implements PipeTransform {
  transform(value: CalcularParcelamentoRequestDto) {
    if (value.dataCompra > value.dataEntrega) {
      throw new BadRequestException(
        'A data de compra não pode ser maior que a data de entrega',
      );
    }

    return value;
  }
}
