import { UsuarioEntity } from '@modules/usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RegistrarUsuarioResponseDto {
  @ApiProperty({
    description: 'ID do usuário',
    example: '123456',
  })
  id: string;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João da Silva',
  })
  nome: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao.silva@example.com',
  })
  email: string;

  constructor(usuario: UsuarioEntity) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
  }
}
