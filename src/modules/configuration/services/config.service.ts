import { ConfigService as ConfigServiceNestjs } from '@nestjs/config';
import { Env } from '../configs/configuration.config';

export class ConfigService extends ConfigServiceNestjs<Env, true> {}
