import { UsuarioEntity } from '@modules/usuario/entities/usuario.entity';
import { ConflictException, Injectable, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrarUsuarioRequestDto } from '../dtos/request/registrar-usuario.dto';

@Injectable()
export class EmailUnicoPipe implements PipeTransform {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async transform(value: RegistrarUsuarioRequestDto) {
    const usuarioJaExiste = await this.usuarioRepository.findOne({
      where: { email: value.email },
    });

    if (usuarioJaExiste) throw new ConflictException('Email já cadastrado');

    return value;
  }
}
