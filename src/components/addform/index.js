import React, { useState } from "react";
import { categories } from "../../constants/addexpense";
import { areas } from "../../constants/Area";
import "react-toastify/dist/ReactToastify.css";
import "./addform.css";
import { toast, ToastContainer } from "react-toastify";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch } from "react-redux";
import { addexpense } from "../../redux/actions/expense";
import successmodel from "./successmodel";
import { useHistory } from "react-router-dom";
const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [areaOpen, setareaOpen] = useState(true);

  const cat = categories;
  var ar = areas;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [opendate, setopendate] = useState("");
  const [closedate, setclosedate] = useState("");

  const [category, setCategory] = useState();
  const [Area, setarea] = useState();

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
    console.log(category);
  };
  const handlearea = (area) => {
    setarea(area);
    setareaOpen(false);
    console.log(category);
  };
  const handleSubmit = () => {
    console.log(opendate);

    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      opendate,
      closedate,
      Area,
      category,
      createdAt: new Date(),
    };
    dispatch(addexpense(data));
    // setModalOpen(true);
    history.push("/");
  };
  const changedate = (e) => {
    setopendate(e.target.value);
    setclosedate(opendate);
    // document.getElementById("checkOut").value = "";
    //     document.getElementById("checkOut").setAttribute("min", firstdate);
  };

  return (
    <div className="add-form">
      <successmodel modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="form-item">
        <label>Name</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter Amount"
          className="amount-input"
          onChange={(e) => handleAmount(e)}
          value={amount}
        />
      </div>
      <label>Check In</label>
      <input type="date" id="checkIn" name="checkIn" onchange={changedate} />

      <label>Check out</label>
      <input type="date" id="checkOut" min={opendate} name="checkOut" />
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fas fa-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              <Scrollbars>
                {cat.map((category) => (
                  <div
                    className="category-item"
                    style={{ borderRight: `5px solid ${category.color}` }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                  </div>
                ))}
              </Scrollbars>
            </div>
          )}
        </div>
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setareaOpen(!areaOpen)}
          >
            <label>{Area ? Area.title : "Area"}</label>
            <i class="fas fa-angle-down"></i>
          </div>
          {areaOpen && (
            <div className="category-container">
              <Scrollbars>
                {ar.map((area) => (
                  <div
                    className="category-item"
                    style={{ borderRight: `5px solid ${area.color}` }}
                    key={area.id}
                    onClick={() => handlearea(area)}
                  >
                    <label>{area.title}</label>
                  </div>
                ))}
              </Scrollbars>
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fas fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
