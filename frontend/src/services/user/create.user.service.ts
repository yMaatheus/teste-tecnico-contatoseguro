import api from "../../lib/axios";
import { UserType } from "../../types";

export const createUser = async (user: Partial<UserType>) => {
  const { data } = await api.post("/users", user);

  return data;
};
