import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

export default class UserController {

  constructor(private service: UserService) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  public async create(_req: Request, res: Response) {
    return res.status(StatusCodes.CREATED).json({ message: 'Route POST /user' });
  }

  public async getAll(_req: Request, res: Response) {
    const users = await this.service.getAll();
    return res.status(StatusCodes.OK).json(users);
  }

  public async updateById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route PUT /user/:id' });
  }

  public async deleteById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route DELETE /user/:id' });
  }
}