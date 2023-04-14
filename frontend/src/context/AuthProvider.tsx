import React, { useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";

type AuthContextType = {
  user: string | null | undefined;
  signout: (callback: VoidFunction) => void;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null | undefined>(
    Cookies.get("user")
  );

  const signout = (callback: VoidFunction) => {
    Cookies.remove("user");
    setUser(null);
    callback();
  };

  const value = { user, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
