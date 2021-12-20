import "../styles/LinkWithAnimation.css";
import { Link } from "react-router-dom";
const LinkWithAnimation = ({ url, className, direction, textContent }) => {
  if (direction === "left") {
    //do stuff
  }
  return (
    <Link to={url} className={`link ${className}`} data-direction={direction}>
      <span className="link__mask">
        <div className="link__container">
          <span className="link__title1 link__title">{textContent}</span>
          <span className="link__title2 link__title">{textContent}</span>
        </div>
      </span>
      <div className="link__icon-wrapper">
        <svg
          className="link__icon"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
        <svg
          className="link__icon"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
    </Link>
  );
};

export default LinkWithAnimation;
