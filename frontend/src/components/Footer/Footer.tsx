import logo from "../../assets/images/logo.png";

const Footer = () => (
  <footer className="bg-gray-400 h-[20%] w-[80%] flex flex-row">
    <div className="flex-1">
      <img src={logo} alt="Logo Contato Seguro" />
    </div>
    <div className="flex-1">
      <div>
        <p>
          Porto Alegre | RS | Brasil
          <br />
          Av. Carlos Gomes, 466 | sala 501
          <br />
          CEP: 90480-000
          <br />
          <a href="tel:+555130861800">+55 (51) 3086.1800</a>
        </p>
      </div>
      <div>
        <div>
          <a href="https://www.linkedin.com/company/contato-seguro---registro-an-nimo-de-informa-es/">
            <img
              src="https://contatoseguro-cms.s3.sa-east-1.amazonaws.com/templates/site-assets/variables/linkedin-ft-icon.png"
              alt="Linkedln"
            />
          </a>
        </div>

        <div>
          <a href="https://www.youtube.com/ConexaoEtica">
            <img
              src="https://contatoseguro-cms.s3.sa-east-1.amazonaws.com/templates/site-assets/variables/yt-ft-icon.png"
              alt="Youtube"
            />
          </a>
        </div>

        <div>
          <a href="https://www.compliancetotal.com.br/">
            <img
              src="https://contatoseguro-cms.s3.sa-east-1.amazonaws.com/templates/site-assets/variables/compliance-ft-icon.png"
              alt="Compliance Total"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <p>
        © Copyright 2008-2023 - Todos os direitos reservados | Administrado por
        <a href=""> Contato Seguro</a>
      </p>
    </div>
  </footer>
);

export default Footer;
