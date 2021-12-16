import { Link } from "react-router-dom";

import Header from "../../Components/Header";
import CreateEmployeeForm from "../../Components/CreateEmployeeForm";

/**
 * Home page calling components like Header and CreateEmployeeForm
 * @module Home
 */

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <CreateEmployeeForm />
      </main>
    </div>
  );
};

export default Home;
