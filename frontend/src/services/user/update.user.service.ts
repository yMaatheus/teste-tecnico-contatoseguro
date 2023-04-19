import api from "../../lib/axios";
import { UserType } from "../../types";

export const updateUser = async (
  id: number,
  user: UserType
): Promise<UserType> => {
  const { data } = await api.put(`/user/${id}`, user);

  return data;
};
