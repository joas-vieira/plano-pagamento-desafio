import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultConnection } from './connections/default.connection';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DefaultConnection,
    }),
  ],
})
export class DatabaseModule {}
