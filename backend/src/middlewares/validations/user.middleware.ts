import { NextFunction, Request, Response } from 'express';
import { UserZodSchema } from '../../database/models/user';

export const userValidationMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = UserZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};