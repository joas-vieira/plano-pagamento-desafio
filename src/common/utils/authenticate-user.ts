import { AutenticarUsuarioResponseDto } from '@modules/autenticacao/dtos/response/autenticar-usuario.dto';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import supertest from 'supertest';

export async function authenticateUser(
  app: NestFastifyApplication,
): Promise<string> {
  const response = await supertest(app.getHttpServer())
    .post('/autenticacao/autenticar')
    .send({
      email: 'test@example.com',
      senha: 'password',
    })
    .expect(200);

  const body = response.body as AutenticarUsuarioResponseDto;

  return body.token;
}
