import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

type ProtectedLayoutType = {
  children?: React.ReactNode;
};

export const ProtectedLayout = ({ children }: ProtectedLayoutType) => {
  const outlet = useOutlet();
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children ? children : outlet}</>;
};
