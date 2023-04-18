import { NextFunction, Request, Response } from 'express';
import { CompanyZodSchema } from '../../database/models/company';

export const createCompanyMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = CompanyZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};