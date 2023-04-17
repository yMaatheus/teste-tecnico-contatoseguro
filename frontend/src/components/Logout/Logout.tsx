import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };
  return (
    <li onClick={handleLogout}>
      <a>Logout</a>
    </li>
  );
};
