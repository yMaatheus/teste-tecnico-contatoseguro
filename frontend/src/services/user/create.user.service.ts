import api from "../../lib/axios";
import { UserType } from "../../types";

export const createUser = async (
  user: Partial<UserType>
): Promise<UserType> => {
  const { data } = await api.post("/user", user);

  return data;
};
