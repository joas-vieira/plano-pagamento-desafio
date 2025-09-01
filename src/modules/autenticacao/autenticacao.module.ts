import { UsuarioEntity } from '@modules/usuario/entities/usuario.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacaoController } from './autenticacao.controller';
import { RegistrarUsuarioService } from './services/registrar-usuario.service';
import { AutenticarUsuarioService } from './services/autenticar-usuario.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from './configs/jwt.config';

@Module({
  imports: [
    JwtModule.registerAsync({ useClass: JwtConfig }),
    TypeOrmModule.forFeature([UsuarioEntity]),
  ],
  controllers: [AutenticacaoController],
  providers: [RegistrarUsuarioService, AutenticarUsuarioService],
})
export class AutenticacaoModule {}
