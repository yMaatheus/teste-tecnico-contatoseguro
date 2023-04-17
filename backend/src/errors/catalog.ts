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
}

export const errorCatalog: ErrorCatalog = {
  InvalidCredentials: {
    error: 'Invalid credentials',
    httpStatus: 401,
  },
  TokenNotFound: {
    error: 'Token not found',
    httpStatus: 401,
  },
  AllFieldsMustBeFilled: {
    error: 'All fields must be filled',
    httpStatus: 400,
  },
  InvalidId: {
    error: 'Id invalid',
    httpStatus: 400,
  },
  WrongPassword: {
    error: 'Wrong password',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  UserNotFound: {
    error: 'User not found',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  ExpiredOrInvalidToken: {
    error: 'Expired or invalid token',
    httpStatus: StatusCodes.UNAUTHORIZED,
  }
};