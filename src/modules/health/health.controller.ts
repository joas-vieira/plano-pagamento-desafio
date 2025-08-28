import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthCheckResult, HealthCheckService } from '@nestjs/terminus';

@ApiTags('Módulo de Health')
@Controller('health')
export class HealthController {
  constructor(private readonly health: HealthCheckService) {}

  @Get('live')
  @ApiOperation({
    summary: 'Verifica se o serviço está ativo',
  })
  live(): Promise<HealthCheckResult> {
    return this.health.check([
      () => ({
        api: {
          status: 'up',
        },
      }),
    ]);
  }
}
