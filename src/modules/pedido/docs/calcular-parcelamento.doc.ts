import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { CalcularParcelamentoResponseDto } from '../dtos/response/calcular-parcelamento.dto';

export const CALCULAR_PARCELAMENTO: ApiResponseOptions = {
  status: HttpStatus.OK,
  description: 'Retorna os dados do parcelamento',
  isArray: true,
  type: CalcularParcelamentoResponseDto,
};
