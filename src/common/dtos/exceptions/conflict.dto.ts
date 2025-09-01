import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ErrorResponse } from '@common/contracts/error-response.contract';

export class ConflictDto implements ErrorResponse {
  @ApiProperty({
    example: 'Informações sobre o erro ocorrido',
  })
  message: string;

  @ApiProperty({
    example: 'Conflict',
  })
  error: string;

  @ApiProperty({
    example: HttpStatus.CONFLICT,
  })
  statusCode: number;
}
