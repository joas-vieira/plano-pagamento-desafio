import { UsuarioEntity } from '@modules/usuario/entities/usuario.entity';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';

interface RegistrarUsuarioServiceRequest {
  nome: string;
  email: string;
  senha: string;
}

export interface RegistrarUsuarioServiceResponse {
  usuario: UsuarioEntity;
}

export class RegistrarUsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  private readonly logger = new Logger(RegistrarUsuarioService.name);

  async execute({
    nome,
    email,
    senha,
  }: RegistrarUsuarioServiceRequest): Promise<RegistrarUsuarioServiceResponse> {
    this.logger.log('Iniciando o registro do usuário');

    const senhaCriptografada = await hash(senha, 6);

    const usuario = await this.usuarioRepository.save({
      nome,
      email,
      senha: senhaCriptografada,
    });

    this.logger.log('Usuário registrado com sucesso');

    return { usuario };
  }
}
