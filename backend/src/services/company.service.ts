import Company from "../database/models/company";
import User from "../database/models/user";
import { Service } from "./service";

export class CompanyService extends Service<Company> {
  async getAll(): Promise<Company[]> {
    const companies = await Company.findAll({
      include: [{
        model: User, as: 'users', through: { attributes: [] }
      }]
    });
    return companies;
  }
}
