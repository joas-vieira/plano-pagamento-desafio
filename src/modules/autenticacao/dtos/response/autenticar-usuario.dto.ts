import { ApiProperty } from '@nestjs/swagger';

export class AutenticarUsuarioResponseDto {
  @ApiProperty({
    description: 'Token de autenticação do usuário',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}
