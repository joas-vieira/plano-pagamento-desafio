import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ErrorResponse } from '@common/contracts/error-response.contract';

export class BadRequestDTO implements ErrorResponse {
  @ApiProperty({
    example: 'Informações sobre o erro ocorrido',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;

  @ApiProperty({
    example: HttpStatus.BAD_REQUEST,
  })
  statusCode: number;
}
