import React from "react";
import Expenselist from "../../components/expenselist";
import Topfold from "../../components/topfold";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        <Topfold />
      </div>
      <Expenselist />
    </div>
  );
};

export default Home;
