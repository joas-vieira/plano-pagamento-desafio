import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { AutenticarUsuarioResponseDto } from '../dtos/response/autenticar-usuario.dto';

export const AUTENTICAR_USUARIO: ApiResponseOptions = {
  status: HttpStatus.OK,
  description: 'Retorna o token de autenticação do usuário',
  type: AutenticarUsuarioResponseDto,
};
