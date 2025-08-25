import { IsEnum, IsNumber } from 'class-validator';
import { EnvironmentsEnum } from '../contracts/environments.contract';

export class VariablesDTO {
  @IsEnum(EnvironmentsEnum)
  MODE: EnvironmentsEnum;
  @IsNumber()
  PORT: number;
}
