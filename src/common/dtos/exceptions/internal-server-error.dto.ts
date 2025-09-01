import { ErrorResponse } from '@common/contracts/error-response.contract';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class InternalServerErrorDto implements ErrorResponse {
  @ApiProperty({
    example: 'Erro interno no servidor',
  })
  message: string;

  @ApiProperty({
    example: 'Internal Server Error',
  })
  error: string;

  @ApiProperty({
    example: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  statusCode: number;
}
