import { ConflictDto } from '@common/dtos/exceptions/conflict.dto';
import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';

export const CONFLICT: ApiResponseOptions = {
  status: HttpStatus.CONFLICT,
  description:
    'Levanta uma exceção quando já existe um recurso com os mesmos dados',
  type: ConflictDto,
};
