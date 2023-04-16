import logo from "../../assets/images/logo.png";

const Navbar = () => (
  <nav className="w-[40%] h-20 flex justify-between mr-auto ml-auto">
    <div>
      <img className="h-full" src={logo} alt="Logo Contato seguro" />
    </div>
    <div className="">
      <ul className="w-full h-full flex items-center flex-row gap-2">
        <li>Usuários</li>
        <li>Empresas</li>
        <li>Relatorios</li>
        <li>Logout</li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
