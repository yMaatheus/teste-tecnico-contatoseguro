import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

export default class UserController {

  constructor(private service: UserService) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  public async create(req: Request, res: Response) {
    const user = await this.service.create(req.body);
    return res.status(StatusCodes.CREATED).json({ user });
  }

  public async getAll(_req: Request, res: Response) {
    const users = await this.service.getAll();
    return res.status(StatusCodes.OK).json(users);
  }
  
  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await this.service.getById(+id);
    return res.status(StatusCodes.OK).json(user);
  }

  public async updateById(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.updateById(+id, req.body);
    return res.status(StatusCodes.OK).end();
  }

  public async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.deleteById(+id);
    return res.status(StatusCodes.OK).end();
  }
}