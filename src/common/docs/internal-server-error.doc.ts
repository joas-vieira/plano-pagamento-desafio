import { InternalServerErrorDTO } from '@common/dtos/exceptions/internal-server-error.dto';
import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';

export const INTERNAL_SERVER_ERROR: ApiResponseOptions = {
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'Levanta uma exceção quando ocorre um erro interno no servidor',
  type: InternalServerErrorDTO,
};
