import api from "../../lib/axios";
import { CompanyType } from "../../types/CompanyType";

export const createCompany = async (
  company: Partial<CompanyType>
): Promise<CompanyType> => {
  const { data } = await api.post("/company", company);

  return data;
};
