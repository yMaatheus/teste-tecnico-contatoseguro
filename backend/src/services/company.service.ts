import Company from "../database/models/company";

export interface ICompanyService {
  getAll(): Promise<Company[]>
}

export default class CompanyService implements ICompanyService {
  async getAll(): Promise<Company[]> {
    const companies = await Company.findAll();
    return companies;
  }
}
