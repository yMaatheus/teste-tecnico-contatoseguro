import api from "../../lib/axios";
import { UserType } from "../../types";

export const getUsers = async (): Promise<UserType[]> => {
  const { data } = await api.get("/user");
  return data;
};
