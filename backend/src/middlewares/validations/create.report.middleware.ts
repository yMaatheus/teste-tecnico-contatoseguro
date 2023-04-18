import { NextFunction, Request, Response } from 'express';
import { ReportZodSchema } from '../../database/models/report';

export const createReportMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const parsed = ReportZodSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;
  return next();
};