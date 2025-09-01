import { createTestingModule } from '@common/utils/create-testing-module';
import { authenticateUser } from '@common/utils/authenticate-user';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import supertest from 'supertest';

describe('PedidoController', () => {
  let app: NestFastifyApplication;
  let token: string;

  beforeAll(async () => {
    app = await createTestingModule();

    await app.init();

    token = await authenticateUser(app);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /pedidos/calcular-parcelamento', () => {
    describe('200', () => {
      it('deve retornar um 200 quando os dados estão corretos', async () => {
        const response = await supertest(app.getHttpServer())
          .post('/pedidos/calcular-parcelamento')
          .set('Authorization', `Bearer ${token}`)
          .send({
            dataCompra: '2023-01-01',
            dataEntrega: '2023-12-01',
            valorTotal: 1000,
            estaInadimplente: false,
          })
          .expect(200);

        expect(response.body).toHaveLength(15);
      });
    });

    describe('400', () => {
      it('deve retornar um 400 quando os dados estão incorretos', async () => {
        const response = await supertest(app.getHttpServer())
          .post('/pedidos/calcular-parcelamento')
          .set('Authorization', `Bearer ${token}`)
          .send({})
          .expect(400);

        expect(response.body).toEqual({
          error: 'Bad Request',
          statusCode: 400,
          message: [
            'dataCompra should not be empty',
            'dataCompra must be a valid ISO 8601 date string',
            'dataEntrega should not be empty',
            'dataEntrega must be a valid ISO 8601 date string',
            'valorTotal should not be empty',
            'valorTotal must be a number conforming to the specified constraints',
            'estaInadimplente should not be empty',
            'estaInadimplente must be a boolean value',
          ],
        });
      });

      it('deve retornar um 400 quando a data de compra é maior que a data de entrega', async () => {
        const response = await supertest(app.getHttpServer())
          .post('/pedidos/calcular-parcelamento')
          .set('Authorization', `Bearer ${token}`)
          .send({
            dataCompra: '2023-12-01',
            dataEntrega: '2023-01-01',
            valorTotal: 1000,
            estaInadimplente: false,
          })
          .expect(400);

        expect(response.body).toEqual({
          error: 'Bad Request',
          statusCode: 400,
          message: 'A data de compra não pode ser maior que a data de entrega',
        });
      });
    });
  });
});
