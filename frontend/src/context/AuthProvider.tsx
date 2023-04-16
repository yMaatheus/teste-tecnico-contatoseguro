import React, { useState } from "react";
import { createContext } from "react";
import { loginUser, logoutUser } from "../services/user";
import { clearUser, getUser, setUserLocal } from "../utils/localStorage.util";

type AuthContextType = {
  user: string | null | undefined;
  signout: () => void;
  signIn: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null | undefined>(getUser());

  const signIn = async (email: string, password: string) => {
    const data = await loginUser(email, password);

    setUser(data);
    setUserLocal(data);
  };

  const signout = async () => {
    await logoutUser();
    setUser(null);
    clearUser();
  };

  const value = { user, signout, signIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
