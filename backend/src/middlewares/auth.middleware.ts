import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { ErrorTypes } from '../errors/catalog';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) throw Error(ErrorTypes.TokenNotFound);
  try {
    const { user } = jwt.verify(token, process.env.JWT_SECRET || "") as JwtPayload;
    res.locals.user = user;
  } catch (error) {
    throw Error(ErrorTypes.ExpiredOrInvalidToken);
  }

  return next();
} 