import "./index.css";
import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./utils/store";

import EmployeeList from "./Pages/EmployeesList";
import Home from "./Pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
