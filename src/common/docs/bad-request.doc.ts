import { BadRequestDto } from '@common/dtos/exceptions/bad-request.dto';
import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';

export const BAD_REQUEST: ApiResponseOptions = {
  status: HttpStatus.BAD_REQUEST,
  description: 'Levanta uma exceção quando o payload enviado é inválido',
  type: BadRequestDto,
};
