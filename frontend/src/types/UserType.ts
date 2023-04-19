import { CompanyType } from "./CompanyType";

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  cityOfBirth?: string;
  companies?: CompanyType[];
};
