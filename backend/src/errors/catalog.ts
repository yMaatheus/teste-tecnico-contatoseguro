import { StatusCodes } from "http-status-codes";

type ErrorResponseObject = {
  error: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export enum ErrorTypes {
  InvalidCredentials = 'InvalidCredentials',
  TokenNotFound = 'TokenNotFound',
  AllFieldsMustBeFilled = 'AllFieldsMustBeFilled',
  InvalidId = 'InvalidId',
  WrongPassword = 'WrongPassword',
  EmailNotFound = 'EmailNotFound',
  ExpiredOrInvalidToken = 'ExpiredOrInvalidToken',
  EntityNotFound = 'EntityNotFound',
  EntityCreationError = 'EntityCreationError',
}

export const errorCatalog: ErrorCatalog = {
  InvalidCredentials: {
    error: 'Invalid credentials',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  TokenNotFound: {
    error: 'Token not found',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  AllFieldsMustBeFilled: {
    error: 'All fields must be filled',
    httpStatus: StatusCodes.BAD_REQUEST,
  },
  InvalidId: {
    error: 'Id invalid',
    httpStatus: StatusCodes.BAD_REQUEST,
  },
  WrongPassword: {
    error: 'Wrong password',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  EmailNotFound: {
    error: 'Email not found',
    httpStatus: StatusCodes.NOT_FOUND,
  },
  ExpiredOrInvalidToken: {
    error: 'Expired or invalid token',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  EntityNotFound: {
    error: 'Entity not found',
    httpStatus: StatusCodes.NOT_FOUND,
  },
  EntityCreationError: {
    error: 'Entity creation error',
    httpStatus: StatusCodes.INTERNAL_SERVER_ERROR,
  }
};