import api from "../../lib/axios";
import { ReportType } from "../../types/ReportType";

export const createReport = async (
  report: Partial<ReportType>
): Promise<ReportType> => {
  const { data } = await api.post("/report", report);

  return data;
};
