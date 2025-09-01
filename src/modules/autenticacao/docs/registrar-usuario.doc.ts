import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { RegistrarUsuarioResponseDto } from '../dtos/response/registrar-usuario.dto';

export const REGISTRAR_USUARIO: ApiResponseOptions = {
  status: HttpStatus.CREATED,
  description: 'Retorna os dados do usuário registrado',
  type: RegistrarUsuarioResponseDto,
};
