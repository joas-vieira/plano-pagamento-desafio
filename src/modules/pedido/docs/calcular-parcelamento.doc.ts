import { ApiResponseOptions } from '@nestjs/swagger';
import { CalcularParcelamentoResponseDto } from '../dtos/response/calcular-parcelamento.dto';

export const CALCULAR_PARCELAMENTO: ApiResponseOptions = {
  status: 200,
  description: 'Retorna os dados do parcelamento',
  isArray: true,
  type: CalcularParcelamentoResponseDto,
};
