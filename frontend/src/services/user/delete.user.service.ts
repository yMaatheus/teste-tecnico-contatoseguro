import api from "../../lib/axios";

export const deleteUser = async (id: number) => {
  const { data } = await api.delete(`/user/${id}`);

  return data;
};
