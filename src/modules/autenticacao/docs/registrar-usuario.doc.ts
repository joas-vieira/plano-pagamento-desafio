import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { RegistrarUsuarioResponseDto } from '../dtos/response/registrar-usuario.dto';

export const REGISTRAR_USUARIO: ApiResponseOptions = {
  status: HttpStatus.OK,
  description: 'Retorna os dados do usuário registrado',
  type: RegistrarUsuarioResponseDto,
};
