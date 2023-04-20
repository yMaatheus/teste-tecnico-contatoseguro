import api from "../../lib/axios";
import { ReportType } from "../../types/ReportType";

export const updateReport = async (
  id: number,
  report: Partial<ReportType>
): Promise<ReportType> => {
  const { data } = await api.put(`/report/${id}`, report);

  return data;
};
