import { UserType } from "./UserType";

export type CompanyType = {
  id: number;
  name: string;
  cnpj: string;
  address: string;
  city: string;
  state: string;
  users?: UserType[];
};
