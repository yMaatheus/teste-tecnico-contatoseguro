import api from "../../lib/axios";

export const loginUser = async (email: string, password: string) => {
  const { data } = await api.post("/auth/login", { email, password });

  return data;
};
