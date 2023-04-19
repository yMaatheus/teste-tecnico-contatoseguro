import api from "../../lib/axios";

export const deleteCompany = async (id: number) => {
  const { data } = await api.put(`/report/${id}`);

  return data;
};
