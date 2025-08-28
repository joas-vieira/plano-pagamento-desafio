import { generateErrorResponse } from '@common/utils/generate-error-response';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    this.logger.error(exception, HttpExceptionFilter.name);

    const isKnowException = exception instanceof HttpException;

    const statusCode = isKnowException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const error = isKnowException
      ? exception.getResponse()
      : generateErrorResponse();

    return response.status(statusCode).send(error);
  }
}
