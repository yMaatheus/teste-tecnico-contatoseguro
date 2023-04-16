import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) return res.status(403).json({ error: 'Token not found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    res.locals.token = decoded;
  } catch (error) {
    return res.status(401).json({ error: 'Expired or invalid token' });
  }

  return next();
}