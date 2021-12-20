import "../styles/HeaderHome.css";

import LinkWithAnimation from "./LinkWithAnimation";

/**
 * A simple header with a title inside
 * @module Header
 *
 */

const Header = () => {
  // View Current Employees
  return (
    <header className="Header">
      <h1 className="Header__heading">HRnet</h1>

      <LinkWithAnimation
        url="/BenjaminLesne_14_07122021/employee-list"
        textContent="view current employees"
      />
    </header>
  );
};

export default Header;
