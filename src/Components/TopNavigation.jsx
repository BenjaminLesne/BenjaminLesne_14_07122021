import "../styles/TopNavigation.css";

import { useState } from "react";

const TopNavigation = (props) => {
  const {
    pageSize,
    setPageSize,
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    useAsyncDebounce,
  } = props;

  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="TopNavigation">
      <div className="TopNavigation__select-number-of-entries-wrapper">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span>entries</span>
      </div>
      <div className="TopNavigation__search-bar-wrapper">
        <label>Search:</label>
        <input
          className="TopNavigation__search-bar"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
