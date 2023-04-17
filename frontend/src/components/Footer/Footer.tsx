import { Logo } from "../Logo";
import { Social } from "../Social";

const Footer = () => (
  <footer className="footer-bg w-full flex justify-center p-10">
    <div className="flex flex-col w-[45%]">
      <div className="flex flex-1 justify-between">
        <div className="flex gap-16">
          <Logo className="h-16" />
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
        <div className="flex flex-col gap-2">
          <Social
            href="https://www.linkedin.com/company/contato-seguro---registro-an-nimo-de-informa-es/"
            src="https://contatoseguro-cms.s3.sa-east-1.amazonaws.com/templates/site-assets/variables/linkedin-ft-icon.png"
            alt="Linkedln"
            className="w-8"
          />
          <Social
            href="https://www.youtube.com/ConexaoEtica"
            src="https://contatoseguro-cms.s3.sa-east-1.amazonaws.com/templates/site-assets/variables/yt-ft-icon.png"
            alt="Youtube"
            className="w-8"
          />
          <Social
            href="https://www.compliancetotal.com.br/"
            src="https://contatoseguro-cms.s3.sa-east-1.amazonaws.com/templates/site-assets/variables/compliance-ft-icon.png"
            alt="Compliance Total"
            className="w-8"
          />
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <p>
          © Copyright 2008-2023 - Todos os direitos reservados | Administrado
          por
          <a href=""> Contato Seguro</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
