import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CalcularParcelamentoRequestDto {
  @ApiProperty({
    description: 'Data da compra',
    example: '2023-01-01',
  })
  @IsDateString()
  @IsNotEmpty()
  dataCompra: Date;

  @ApiProperty({
    description: 'Data de entrega',
    example: '2023-12-01',
  })
  @IsDateString()
  @IsNotEmpty()
  dataEntrega: Date;

  @ApiProperty({
    description: 'Valor total da compra',
    example: 1000,
  })
  @IsNumber()
  @IsNotEmpty()
  valorTotal: number;

  @ApiProperty({
    description: 'Indica se o cliente está inadimplente',
    example: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  estaInadimplente: boolean;
}
