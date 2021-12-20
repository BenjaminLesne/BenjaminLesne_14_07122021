import { useSelector } from "react-redux";
import { useMemo } from "react";

import EmployeesTable from "../../Components/EmployeesTable";
import HeaderEmployeesList from "../../Components/HeaderEmployeesList";
import { EMPLOYEES_COLUMNS } from "../../utils/data.js";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);

  const columns = useMemo(() => EMPLOYEES_COLUMNS, []);
  const data = useMemo(() => employees, [employees]);

  return (
    <>
      <HeaderEmployeesList />
      <EmployeesTable data={data} columns={columns} />
    </>
  );
};

export default EmployeeList;
