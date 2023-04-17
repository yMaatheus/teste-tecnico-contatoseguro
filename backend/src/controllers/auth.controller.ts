import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AuthService from '../services/auth.service';

export default class AuthController {

  constructor(private service: AuthService) {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  public async status(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'You are authenticated', user: res.locals.user });
  }

  public async register(req: Request, res: Response) {
    const { token, user } = await this.service.register(req.body);

    res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
  
    return res.status(StatusCodes.CREATED).json({ user, message: 'Register successful'});
  }

  public async login(req: Request, res: Response) {
    const { token, user } = await this.service.login(req.body);

    res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
  
    return res.status(StatusCodes.OK).json({ user, message: 'Login successful'});
  }

  public async logout(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).clearCookie('token').json({ message: 'Logout successful' });
  };
}