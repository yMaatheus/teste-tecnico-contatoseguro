import { NextFunction, Request, Response } from 'express';
import { AuthUserZodSchema } from '../../database/models/auth';

export const registerAuthMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = AuthUserZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};