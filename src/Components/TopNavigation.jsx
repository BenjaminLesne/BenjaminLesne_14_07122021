import "../styles/TopNavigation.css";

import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";

const TopNavigation = (props) => {
  const {
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
        <span>Entries per page:</span>
        <DropdownMenu
          options={[10, 25, 50, 100]}
          initialInputValue={10}
          onChange={(optionValue) => setPageSize(Number(optionValue))}
          id="employees-list"
        />
      </div>

      <SearchBar
        setValue={setValue}
        onChange={onChange}
        value={value}
        count={count}
      />
    </div>
  );
};

export default TopNavigation;
