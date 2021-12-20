import { render } from "../../test";
import { screen } from "@testing-library/react";

import handleFormValidation from "../handleFormValidation";

import Home from "../../.././Pages/Home";

describe("handleFormValidation", () => {
  render(<Home />);

  const city = screen.getByLabelText("city");
  const state = screen.getByTestId("state");
  const zipCode = screen.getByLabelText("zip code");
  const department = screen.getByTestId("department");
  const startDate = screen.getByLabelText("start date");

  //========================================CITY TEST============================================
  it("should return true when input has id:'city' and its value is 'Paris'", async () => {
    city.value = "Paris";
    await handleFormValidation([city]).then((result) => {
      expect(result).toEqual([true]);
    });
  });

  it("should return false when input has id:'notAcity' and its value is 'Paris'", async () => {
    city.id = "notAcity";
    city.value = "Paris";
    await handleFormValidation([city]).then((result) =>
      expect(result).toEqual([false])
    );
  });

  it("should return false when input has id:'city' and its value is an empty string", async () => {
    city.value = "";
    await handleFormValidation([city]).then((result) =>
      expect(result).toEqual([false])
    );
  });

  //========================================STATE TEST============================================
  it("should return true when input has id:'state' and its value is 'Alabama'", async () => {
    state.value = "Alabama";
    await handleFormValidation([state]).then((result) => {
      expect(result).toEqual([true]);
    });
  });

  it("should return false when input has id:'notAstate' and its value is 'Alabama'", async () => {
    state.id = "notAstate";
    state.value = "Alabama";
    await handleFormValidation([state]).then((result) =>
      expect(result).toEqual([false])
    );
  });

  it("should return false when input has id:'state' and its value is an empty string", async () => {
    state.value = "";
    await handleFormValidation([state]).then((result) =>
      expect(result).toEqual([false])
    );
  });
  //========================================ZIP-CODE TEST============================================

  it("should return true when input has id:'zip-code' and its value is '10'", async () => {
    zipCode.value = "10";
    await handleFormValidation([zipCode]).then((result) => {
      expect(result).toEqual([true]);
    });
  });

  it("should return false when input has id:'not-a-zip-code' and its value is '10'", async () => {
    zipCode.id = "not-a-zip-code";
    zipCode.value = "10";
    await handleFormValidation([zipCode]).then((result) =>
      expect(result).toEqual([false])
    );
  });

  it("should return false when input has id:'zip-code' and its value is an empty string", async () => {
    zipCode.value = "";
    await handleFormValidation([zipCode]).then((result) =>
      expect(result).toEqual([false])
    );
  });
  //========================================DEPARTMENT TEST============================================

  it("should return true when input has id:'department' and its value is 'Sales'", async () => {
    department.value = "Sales";
    await handleFormValidation([department]).then((result) => {
      expect(result).toEqual([true]);
    });
  });

  it("should return false when input has id:'not-a-department' and its value is '10'", async () => {
    department.id = "not-a-department";
    department.value = "Sales";
    await handleFormValidation([department]).then((result) =>
      expect(result).toEqual([false])
    );
  });

  it("should return false when input has id:'department' and its value is an empty string", async () => {
    department.value = "";
    await handleFormValidation([department]).then((result) =>
      expect(result).toEqual([false])
    );
  });

  //========================================START DATE TEST============================================
  it("should return true when input has id:'start-date' and its value is '18/12/2021'", async () => {
    startDate.value = "18/12/2021";
    await handleFormValidation([startDate]).then((result) => {
      expect(result).toEqual([true]);
    });
  });

  it("should return false when input has id:'not-a-start-date' and its value is '18/12/2021'", async () => {
    startDate.id = "not-a-start-date";
    startDate.value = "18/12/2021";
    await handleFormValidation([startDate]).then((result) =>
      expect(result).toEqual([false])
    );
  });

  it("should return false when input has id:'start-date' and its value is an empty string", async () => {
    startDate.value = "";
    await handleFormValidation([startDate]).then((result) =>
      expect(result).toEqual([false])
    );
  });
});
