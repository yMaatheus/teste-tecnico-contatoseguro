import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default class UserController {

  constructor() {}

  public async create(_req: Request, res: Response) {
    return res.status(StatusCodes.CREATED).json({ message: 'Route POST /user' });
  }

  public async getAll(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route GET /user' });
  }

  public async updateById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route PUT /user/:id' });
  }

  public async deleteById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route DELETE /user/:id' });
  }
}