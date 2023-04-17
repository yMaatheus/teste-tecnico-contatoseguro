import { Logo } from "../Logo";
import { Logout } from "../Logout";

const Navbar = () => (
  <nav className="flex justify-center w-full h-[92px] py-2 px-4 shadow-md">
    <div className="flex justify-between items-center w-[40%]">
      <Logo className="h-12" />
      <div>
        <ul className="flex items-center flex-row gap-8">
          <li>
            <a href="">Usuários</a>
          </li>
          <li>Empresas</li>
          <li>Relatorios</li>
          <Logout />
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
