import "../styles/HeaderEmployeesList.css";

import LinkWithAnimation from "./LinkWithAnimation";

/**
 * A simple header with a title inside
 * @module HeaderEMployeesList
 *
 */

const HeaderEmployeesList = () => {
  return (
    <header className="HeaderEmployeesList">
      <LinkWithAnimation
        className="HeaderEmployeesList__link-to-home"
        url="/BenjaminLesne_14_07122021/"
        direction="left"
        textContent="Go Back to Home"
      />
      <h1 className="HeaderEmployeesList__heading">Current Employees</h1>
    </header>
  );
};

export default HeaderEmployeesList;
