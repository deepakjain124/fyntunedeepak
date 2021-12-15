import React from "react";
import "./card.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteexpense } from "../../redux/actions/expense";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteexpense(item));
  };

  return (
    <div
      className="cards"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-image-container">{item.category.title}</div>
      <br />
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div className="card-image-container">{item.Area.title}</div>
        <div className="card-image-container">{item.opendate}</div>

        <div></div>
        <div className="delete-icon" onClick={handleDelete}>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
