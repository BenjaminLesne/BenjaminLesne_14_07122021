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

  let entriesStart = pageSize * pageIndex;
  let entriesEnd = entriesStart + pageSize;

  return (
    <div className="BottomNavigation">
      <div className="BottomNavigation__showing-x-to-y-of-z-entries">
        <p>
          Showing {entriesStart} to {entriesEnd} of {rows.length} entries
        </p>
      </div>
      <div className="BottomNavigation__buttons-wrapper">
        <button
          className="BottomNavigation__buttons"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="BottomNavigation__buttons"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
