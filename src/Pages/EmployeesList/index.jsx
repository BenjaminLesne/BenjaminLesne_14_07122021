import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

import EmployeesTable from "../../Components/EmployeesTable";
import { EMPLOYEES_COLUMNS } from "../../utils/data.js";

const EmployeeList = () => {
  const [loading, setLoading] = useState(false);
  const employees = useSelector((state) => state.employees);

  const columns = useMemo(() => EMPLOYEES_COLUMNS, []);
  const data = useMemo(() => employees, [employees]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <button onClick={() => console.log(employees)}>
        Cliquez bande de salope
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <EmployeesTable data={data} columns={columns} />
      )}

      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;
