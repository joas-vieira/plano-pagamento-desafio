import { UsuarioEntity } from '@modules/usuario/entities/usuario.entity';
import { BadRequestException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { Repository } from 'typeorm';

interface AutenticarUsuarioServiceRequest {
  email: string;
  senha: string;
}

export interface AutenticarUsuarioServiceResponse {
  token: string;
}

export class AutenticarUsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
    private readonly jwtService: JwtService,
  ) {}

  private readonly logger = new Logger(AutenticarUsuarioService.name);

  async execute({
    email,
    senha,
  }: AutenticarUsuarioServiceRequest): Promise<AutenticarUsuarioServiceResponse> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
    });

    if (!usuario) {
      throw new BadRequestException('Credenciais inválidas');
    }

    const senhaCorresponde = await compare(senha, usuario.senha);

    if (!senhaCorresponde) {
      throw new BadRequestException('Credenciais inválidas');
    }

    const token = this.jwtService.sign({ sub: usuario.id });

    return { token };
  }
}
