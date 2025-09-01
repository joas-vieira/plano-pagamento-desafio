import { BAD_REQUEST } from '@common/docs/bad-request.doc';
import { CONFLICT } from '@common/docs/conflic.doc';
import { INTERNAL_SERVER_ERROR } from '@common/docs/internal-server-error.doc';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AUTENTICAR_USUARIO } from './docs/autenticar-usuario.doc';
import { REGISTRAR_USUARIO } from './docs/registrar-usuario.doc';
import { AutenticarUsuarioRequestDto } from './dtos/request/autenticar-usuario.dto';
import { RegistrarUsuarioRequestDto } from './dtos/request/registrar-usuario.dto';
import { AutenticarUsuarioResponseDto } from './dtos/response/autenticar-usuario.dto';
import { RegistrarUsuarioResponseDto } from './dtos/response/registrar-usuario.dto';
import { EmailUnicoPipe } from './pipes/validar-datas-compra-entrega.pipe';
import { AutenticarUsuarioService } from './services/autenticar-usuario.service';
import { RegistrarUsuarioService } from './services/registrar-usuario.service';

@Controller('autenticacao')
@ApiTags('Módulo Autenticação')
@ApiResponse(BAD_REQUEST)
@ApiResponse(INTERNAL_SERVER_ERROR)
export class AutenticacaoController {
  constructor(
    private readonly registrarUsuarioService: RegistrarUsuarioService,
    private readonly autenticarUsuarioService: AutenticarUsuarioService,
  ) {}

  @Post('registrar')
  @ApiOperation({ summary: 'Registrar usuário' })
  @ApiResponse(CONFLICT)
  @ApiResponse(REGISTRAR_USUARIO)
  @HttpCode(201)
  async registrarUsuario(
    @Body(EmailUnicoPipe) body: RegistrarUsuarioRequestDto,
  ): Promise<RegistrarUsuarioResponseDto> {
    const { usuario } = await this.registrarUsuarioService.execute(body);

    return new RegistrarUsuarioResponseDto(usuario);
  }

  @Post('autenticar')
  @ApiOperation({ summary: 'Autenticar usuário' })
  @ApiResponse(AUTENTICAR_USUARIO)
  @HttpCode(200)
  async autenticarUsuario(
    @Body() body: AutenticarUsuarioRequestDto,
  ): Promise<AutenticarUsuarioResponseDto> {
    const { token } = await this.autenticarUsuarioService.execute(body);

    return new AutenticarUsuarioResponseDto(token);
  }
}
