import { NextFunction, Request, Response } from 'express';
import { AuthUserZodSchema } from '../../interfaces/IAuthUser';

export const registerAuthMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = AuthUserZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};

export default registerAuthMiddleware;