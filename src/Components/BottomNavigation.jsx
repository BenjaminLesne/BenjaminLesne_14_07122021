import "../styles/BottomNavigation.css";

const BottomNavigation = (props) => {
  const {
    rows,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageIndex,
    pageSize,
  } = props;

  const totalEntries = rows.length;

  let entriesStart = pageSize * pageIndex + 1;
  let entriesEnd =
    entriesStart + pageSize > totalEntries
      ? totalEntries
      : entriesStart + pageSize - 1;

  return (
    <div className="BottomNavigation">
      <div className="BottomNavigation__showing-x-to-y-of-z-entries">
        <p>
          Showing {entriesStart > entriesEnd ? entriesEnd : entriesStart} to{" "}
          {entriesEnd} of {rows.length} entries
        </p>
      </div>
      <div className="BottomNavigation__buttons-wrapper">
        <button
          name="previous-page-button"
          data-testid="Previous"
          className="BottomNavigation__buttons"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          &#8249;
        </button>
        <button
          data-testid="Next"
          name="next-page-button"
          className="BottomNavigation__buttons"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
