import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegistrarUsuarioRequestDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João da Silva',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao.silva@example.com',
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senha123',
  })
  @IsString()
  @IsNotEmpty()
  senha: string;
}
