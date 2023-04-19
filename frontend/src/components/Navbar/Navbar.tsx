import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import { Logout } from "../Logout";
import { ThemeToogle } from "../ThemeToogle";

const Navbar = () => (
  <nav className="flex justify-center w-full h-[92px] py-2 px-4 shadow-md">
    <div className="flex justify-between items-center w-[40%]">
      <Logo className="h-12" />
      <div>
        <ul className="flex items-center flex-row gap-8">
          <li>
            <NavLink to="/usuarios">Usuários</NavLink>
          </li>
          <li>
            <NavLink to="/empresas">Empresas</NavLink>
          </li>
          <li>
            <NavLink to="/relatorios">Relatórios</NavLink>
          </li>
          <Logout />
          <li>
            <ThemeToogle />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
