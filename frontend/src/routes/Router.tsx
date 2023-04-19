import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import { LoginPage } from "../pages/LoginPage";
import { UsersPage } from "../pages/UsersPage";
import { useAuth } from "../context/AuthProvider";

export const Router = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={user ? <Navigate to="/usuarios" replace /> : <LoginPage />}
        />

        <Route element={<ProtectedLayout />}>
          <Route path="usuarios" element={<UsersPage />} />
          <Route path="empresas" element={<h1>Empresas</h1>} />
          <Route path="relatorios" element={<h1>Relatorio</h1>} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
