import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import LoginPage from "../pages/LoginPage";

export const Routes = () => (
  <ReactRouterDomRoutes>
    <Route index element={<LoginPage />} />

    <Route element={<ProtectedLayout />}>
      <Route path="usuarios" element={<h1>Usuários</h1>} />
      <Route path="empresas" element={<h1>Empresas</h1>} />
      <Route path="relatorios" element={<h1>Relatorio</h1>} />
    </Route>

    <Route path="*" element={<ErrorPage />} />
  </ReactRouterDomRoutes>
);
