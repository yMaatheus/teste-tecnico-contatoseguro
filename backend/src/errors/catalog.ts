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
  UserNotFound = 'UserNotFound',
  ExpiredOrInvalidToken = 'ExpiredOrInvalidToken',
  EntityNotFound = 'EntityNotFound',
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
  UserNotFound: {
    error: 'User not found',
    httpStatus: StatusCodes.NOT_FOUND,
  },
  ExpiredOrInvalidToken: {
    error: 'Expired or invalid token',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  EntityNotFound: {
    error: 'Entity not found',
    httpStatus: StatusCodes.NOT_FOUND,
  }
};