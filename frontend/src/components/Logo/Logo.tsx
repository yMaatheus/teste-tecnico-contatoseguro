import logo from "../../assets/images/logo.png";
import PropTypes from "prop-types";

export const Logo = ({ className = "", classWrapper = "" }) => (
  <div className={classWrapper}>
    <img className={className} src={logo} alt="Logo Contato seguro" />
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
  classWrapper: PropTypes.string,
};
