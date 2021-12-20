import "../styles/SortIcon.css";

const SortIcon = ({ isSortedDesc }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="sort-up"
      className="SortIcon"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        className={isSortedDesc === false ? "SortIcon__active-icon" : ""}
        d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
      ></path>
      <path
        className={isSortedDesc === true ? "SortIcon__active-icon" : ""}
        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
      ></path>
    </svg>
  );
};

export default SortIcon;
