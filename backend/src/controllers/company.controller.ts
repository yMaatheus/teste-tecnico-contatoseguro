import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CompanyService from '../services/company.service';

export default class CompanyController {

  constructor(private service: CompanyService) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  public async create(_req: Request, res: Response) {
    return res.status(StatusCodes.CREATED).json({ message: 'Route POST /company' });
  }

  public async getAll(_req: Request, res: Response) {
    const companies = await this.service.getAll();
    return res.status(StatusCodes.OK).json(companies);
  }

  public async updateById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route PUT /company/:id' });
  }

  public async deleteById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route DELETE /company/:id' });
  }
}