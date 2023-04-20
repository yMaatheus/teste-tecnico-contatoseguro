import { NextFunction, Request, Response } from 'express';
import { CompanyZodSchema } from '../../database/models/company';

export const companyCreateMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = CompanyZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};

export const companyUpdateMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const schema = CompanyZodSchema.partial();
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};