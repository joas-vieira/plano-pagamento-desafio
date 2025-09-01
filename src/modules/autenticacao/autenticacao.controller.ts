import { BAD_REQUEST } from '@common/docs/bad-request.doc';
import { CONFLICT } from '@common/docs/conflic.doc';
import { INTERNAL_SERVER_ERROR } from '@common/docs/internal-server-error.doc';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { REGISTRAR_USUARIO } from './docs/registrar-usuario.doc';
import { RegistrarUsuarioRequestDto } from './dtos/request/registrar-usuario.dto';
import { RegistrarUsuarioResponseDto } from './dtos/response/registrar-usuario.dto';
import { RegistrarUsuarioService } from './services/registrar-usuario.service';
import { EmailUnicoPipe } from './pipes/validar-datas-compra-entrega.pipe';

@Controller('autenticacao')
@ApiTags('Módulo Autenticação')
@ApiResponse(BAD_REQUEST)
@ApiResponse(INTERNAL_SERVER_ERROR)
export class AutenticacaoController {
  constructor(
    private readonly registrarUsuarioService: RegistrarUsuarioService,
  ) {}

  @Post('registrar')
  @ApiOperation({ summary: 'Registrar usuário' })
  @ApiResponse(CONFLICT)
  @ApiResponse(REGISTRAR_USUARIO)
  @HttpCode(200)
  async registrarUsuario(
    @Body(EmailUnicoPipe) body: RegistrarUsuarioRequestDto,
  ): Promise<RegistrarUsuarioResponseDto> {
    const { usuario } = await this.registrarUsuarioService.execute(body);

    return new RegistrarUsuarioResponseDto(usuario);
  }
}
