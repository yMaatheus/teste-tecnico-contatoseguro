import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const loginAuthMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};

export default loginAuthMiddleware;