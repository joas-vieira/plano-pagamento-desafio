import { ConfigService } from '@modules/configuration/services/config.service';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { resolve } from 'node:path';

@Injectable()
export class DefaultConnection implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const path = resolve(__dirname, '..', '..');

    const database = this.configService.get('database.default', {
      infer: true,
    });

    return {
      type: 'postgres',
      host: database.host,
      port: database.port,
      username: database.username,
      password: database.password,
      database: database.database,
      connectTimeoutMS: database.timeout,
      entities: [`${path}/**/*.entity.{ts,js}`],
      migrations: [`${path}/**/migrations/*.{ts,js}`],
      migrationsRun: true,
      synchronize: false,
      uuidExtension: 'pgcrypto',
    };
  }
}
