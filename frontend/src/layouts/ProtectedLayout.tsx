import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type ProtectedLayoutType = {
  children?: React.ReactNode;
};

export const ProtectedLayout = ({ children }: ProtectedLayoutType) => {
  const outlet = useOutlet();
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <main className="flex-1">{children ? children : outlet}</main>
      <Footer />
    </div>
  );
};
