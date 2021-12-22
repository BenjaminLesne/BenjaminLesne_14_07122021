import "../styles/EmployeesTable.css";
import React from "react";

import PropTypes from "prop-types";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
} from "react-table";

import BottomNavigation from "./BottomNavigation";
import TopNavigation from "./TopNavigation";
import SortIcon from "./SortIcon";

/**
 * return all employees in a table made with {@link React-table https://react-table.tanstack.com/docs/overview}
 * @module EmployeesTable
 */

const EmployeesTable = ({ data, columns }) => {
  // const [isSortedDesc, setIsSortedDesc] = useState(null);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  return (
    <div className="EmployeesTable-wrapper">
      <TopNavigation
        pageSize={pageSize}
        setPageSize={setPageSize}
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        useAsyncDebounce={useAsyncDebounce}
      />
      <table
        {...getTableProps()}
        id="employee-table"
        className="EmployeesTable"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="EmployeesTable__heading-row"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="EmployeesTable__header"
                >
                  <span className="EmployeesTable__header-text-content">
                    {column.render("Header")}
                  </span>

                  {/* Too many re-redners if I use setIsSortedDesc instead of <SortIcon isSortedDesc={myValue} />. If time allows it, I will fix that later. */}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <SortIcon isSortedDesc={true} />
                    ) : (
                      <SortIcon isSortedDesc={false} />
                    )
                  ) : (
                    <SortIcon isSortedDesc={null} />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                className="EmployeesTable__content-row"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="EmployeesTable__cell"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <BottomNavigation
        rows={rows}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </div>
  );
};

EmployeesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ),
};

export default EmployeesTable;
