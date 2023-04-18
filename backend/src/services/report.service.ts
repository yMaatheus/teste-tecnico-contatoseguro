import Company from "../database/models/company";
import Report from "../database/models/report";
import User from "../database/models/user";
import Service from "./service";

export default class ReportService extends Service<Report> {
  async getAll(): Promise<Report[]> {
    const reports = await Report.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Company, as: 'company' },
      ]
    });
    return reports;
  }
}
