import { ErrorRequestHandler } from 'express';
import { ErrorTypes, errorCatalog } from '../errors/catalog';
import { ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

export const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues });
  }
  // aqui vamos fazer o cast da mensagem de erro para uma chave do Enum ErrorTypes
  // com o keyof typeof - traduzindo seria algo como 'chaves do tipo de'
  // dizemos que o `err.message` é alguma das chaves do ErrorTypes
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  // vamos usar a mensagem para acessar um erro do nosso catálogo
  // se a mensagem não for uma chave do nosso catálogo "mappedError" vai retornar undefined e não entrar no "if"
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    // dado que o erro está mapeado no nosso catálogo
    // "mappedError" tem valores necessário para responder a requisição
    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }
  console.error(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'internal error' });
};

export default errorHandler;