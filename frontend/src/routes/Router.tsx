import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import { LoginPage } from "../pages/LoginPage";
import { UsersPage } from "../pages/UsersPage";
import { useAuth } from "../context/AuthProvider";
import { CompaniesPage } from "../pages/CompaniesPage";
import { ReportsPage } from "../pages/ReportsPage";

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
          <Route path="empresas" element={<CompaniesPage />} />
          <Route path="relatorios" element={<ReportsPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
