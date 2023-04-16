import api from "../../lib/axios";

export const logoutUser = async () => {
  const { data } = await api.post("/user/logout");

  return data;
};
