import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ReportService from '../services/report.service';

export default class ReportController {

  constructor(private service: ReportService) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  public async create(_req: Request, res: Response) {
    return res.status(StatusCodes.CREATED).json({ message: 'Route POST /report' });
  }

  public async getAll(_req: Request, res: Response) {
    const reports = await this.service.getAll();
    return res.status(StatusCodes.OK).json(reports);
  }

  public async updateById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route PUT /report/:id' });
  }

  public async deleteById(_req: Request, res: Response) {
    return res.status(StatusCodes.OK).json({ message: 'Route DELETE /report/:id' });
  }
}