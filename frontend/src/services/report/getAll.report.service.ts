import api from "../../lib/axios";
import { ReportType } from "../../types/ReportType";

export const getReports = async (): Promise<ReportType[]> => {
  const { data } = await api.get("/report");
  return data;
};
