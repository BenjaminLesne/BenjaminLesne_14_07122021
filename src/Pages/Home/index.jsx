import "../../styles/Home.css";

import Header from "../../Components/HeaderHome";
import CreateEmployeeForm from "../../Components/CreateEmployeeForm";

/**
 * Home page calling components like Header and CreateEmployeeForm
 * @module Home
 */

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <main className="container Home__main">
        <CreateEmployeeForm />
      </main>
    </div>
  );
};

export default Home;
