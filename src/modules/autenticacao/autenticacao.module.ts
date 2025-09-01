import { UsuarioEntity } from '@modules/usuario/entities/usuario.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacaoController } from './autenticacao.controller';
import { AutenticarUsuarioService } from './services/autenticar-usuario.service';
import { RegistrarUsuarioService } from './services/registrar-usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [AutenticacaoController],
  providers: [RegistrarUsuarioService, AutenticarUsuarioService],
})
export class AutenticacaoModule {}
