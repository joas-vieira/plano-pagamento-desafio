import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '../services/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtConfig implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.configService.get('jwt.secret', { infer: true }),
      signOptions: { expiresIn: '7d' },
    };
  }
}
