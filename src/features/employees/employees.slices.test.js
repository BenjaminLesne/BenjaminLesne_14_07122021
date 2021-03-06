import * as employeesActions from "./employees.slices";
import employeeReducer from "./employees.slices";

const employeeTest = {
  firstName: "Benjamin",
  lastName: "Lesne",
  dateOfBirth: "07-08-1990",
  startDate: "08-08-1990",
  street: "antoine de jussieu",
  city: "Saint nazaire",
  state: "France",
  zipCode: 2,
  department: "Sale",
};

const employeesStateTest = [employeeTest, employeeTest, employeeTest];

describe("Employees actions", () => {
  it("should add an employee to global state.employees array", () => {
    expect(employeesActions.addEmployee()).toEqual({
      type: "employees/addEmployee",
    });
  });
});

describe("Employees reducer", () => {
  it("should return initial state when state is undefined", () => {
    expect(employeeReducer(undefined, { type: "@INIT" })).toEqual([]);
  });

  it("should add an employee to global state.employees array", () => {
    expect(
      employeeReducer(undefined, employeesActions.addEmployee(employeeTest))
    ).toEqual([employeeTest]);

    expect(
      employeeReducer(
        employeesStateTest,
        employeesActions.addEmployee(employeeTest)
      )
    ).toEqual([...employeesStateTest, employeeTest]);
  });

  it("should return state on invalid action", () => {
    expect(
      employeeReducer(employeesStateTest, { type: "invalidAction" })
    ).toEqual(employeesStateTest);
  });
});
