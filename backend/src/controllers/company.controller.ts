import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default class CompanyController {

  constructor() {}

  public async create(_req: Request, res: Response) {
    return res.status(StatusCodes.CREATED).json({ message: 'Route POST /company' });
  }

  public async getAll(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route GET /company' });
  }

  public async updateById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route PUT /company/:id' });
  }

  public async deleteById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route DELETE /company/:id' });
  }
}