import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { Button } from "react-daisyui";

export const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};
