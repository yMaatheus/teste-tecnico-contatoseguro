import { NextFunction, Request, Response } from 'express';
import { ReportZodSchema } from '../../database/models/report';
import { z } from 'zod';

export const reportCreateMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = ReportZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};

export const reportUpdateMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const schema = z.object({
    description: z.string().min(6),
  }).strict();
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};