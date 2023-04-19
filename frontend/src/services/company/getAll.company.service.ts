import api from "../../lib/axios";
import { CompanyType } from "../../types/CompanyType";

export const getCompanies = async (): Promise<CompanyType[]> => {
  const { data } = await api.get("/company");
  return data;
};
