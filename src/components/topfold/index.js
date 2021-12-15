import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expense";
import "../topfold/topfold.css";
const Topfold = () => {
  const [query, setquery] = useState("");
  const dispatch = useDispatch();
  const handlequery = (e) => {
    setquery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            🔍
            <input
              type="text"
              placeholder="search"
              value={query}
              onChange={handlequery}
            />
          </div>
          <Link to="/addexpense">
            <div className="add-button">
              <i className="fas fa-plus"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="addtopfold-button">
              <i className="fas fa-arrow-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="addtopfold-button">
              <i className="fas fa-window-close"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topfold;
