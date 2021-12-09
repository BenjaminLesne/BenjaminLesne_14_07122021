import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const employees = useSelector((state) => state);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <button onClick={() => console.log(employees)}>
        Cliquez bande de salope
      </button>
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;
