import { UsuarioEntity } from '@modules/usuario/entities/usuario.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacaoController } from './autenticacao.controller';
import { RegistrarUsuarioService } from './services/registrar-usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [AutenticacaoController],
  providers: [RegistrarUsuarioService],
})
export class AutenticacaoModule {}
