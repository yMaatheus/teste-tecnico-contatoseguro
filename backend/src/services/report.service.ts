import Report from "../database/models/report";

export interface IReportService {
  getAll(): Promise<Report[]>
}

export default class ReportService implements IReportService {
  async getAll(): Promise<Report[]> {
    const companies = await Report.findAll();
    return companies;
  }
}
