import "../styles/SearchBar.css";

const SearchBar = ({ setValue, onChange, value, count }) => {
  return (
    <div className="SearchBar">
      <label className="SearchBar__label">Search:</label>
      <input
        className="SearchBar__input"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </div>
  );
};

export default SearchBar;
