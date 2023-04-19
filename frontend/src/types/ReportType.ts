import { CompanyType } from "./CompanyType";
import { UserType } from "./UserType";

export type ReportType = {
  id: number;
  userId: number;
  companyId: number;
  description: string;
  user?: UserType;
  company?: CompanyType;
};
