import PropTypes from "prop-types";

export const Social = ({ href = "", src = "", alt = "", className = "" }) => (
  <div>
    <a href={href}>
      <img src={src} alt={alt} className={className} />
    </a>
  </div>
);

Social.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
