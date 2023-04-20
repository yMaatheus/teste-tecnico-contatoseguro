import api from "../../lib/axios";
import { CompanyType } from "../../types/CompanyType";

export const updateCompany = async (
  id: number,
  company: Partial<CompanyType>
): Promise<CompanyType> => {
  const { data } = await api.put(`/company/${id}`, company);

  return data;
};
