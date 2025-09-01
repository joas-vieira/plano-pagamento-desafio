import { IsEnum, IsNumber, IsString } from 'class-validator';
import { EnvironmentsEnum } from '../contracts/environments.contract';

export class VariablesDTO {
  @IsEnum(EnvironmentsEnum)
  MODE: EnvironmentsEnum;
  @IsNumber()
  PORT: number;
  @IsString()
  START_COMMAND: string;

  @IsString()
  DEFAULT_DATABASE_HOST: string;
  @IsNumber()
  DEFAULT_DATABASE_PORT: number;
  @IsString()
  DEFAULT_DATABASE_USERNAME: string;
  @IsString()
  DEFAULT_DATABASE_PASSWORD: string;
  @IsString()
  DEFAULT_DATABASE_NAME: string;
  @IsNumber()
  DEFAULT_DATABASE_TIMEOUT: number;
}
