import React from "react";
import Addform from "../../components/addform";
import Topfold from "../../components/topfold";
import "../addexpense/addexpense.css";
const Addexpense = () => {
  return (
    <div className="add-expense">
      <Topfold />
      <Addform />
    </div>
  );
};

export default Addexpense;
