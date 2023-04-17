import { NextFunction, Request, Response } from 'express';
import { UserZodSchema } from '../../interfaces/IUser';

export const createUserMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = UserZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};