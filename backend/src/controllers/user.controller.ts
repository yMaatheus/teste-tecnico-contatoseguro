import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export default class UserController {

  constructor() {}

  public async me(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'You are authenticated', token: res.locals.token });
  }

  public async login(_req: Request, res: Response) {
    const token = jwt.sign({ id: '10' }, JWT_SECRET);
    res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
  
    return res.status(StatusCodes.OK).json({ message: 'Login successful'});
  }

  public async logout(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).clearCookie('token').json({ message: 'Logout successful' });
  };
}