import { UserType } from "../types/UserType";

export const setUserLocal = (user: UserType) =>
  localStorage.setItem("user", JSON.stringify(user));

export const getUser = () => {
  const result = localStorage.getItem("user");
  return result && JSON.parse(result);
};

export const clearUser = () => localStorage.removeItem("user");
