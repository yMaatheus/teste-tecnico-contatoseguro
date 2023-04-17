import logo from "../../assets/images/logo.png";
import PropTypes from "prop-types";

export const Logo = ({ className = "" }) => (
  <div>
    <img className={className} src={logo} alt="Logo Contato seguro" />
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
};
