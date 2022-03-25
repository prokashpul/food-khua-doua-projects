import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { cartRemoved } from "../../utilities/localstore";
import "./Foodcart.css";
const Foodcart = ({ cart }) => {
  const { strMeal, strMealThumb, idMeal } = cart;
  const [removeitem, setRemove] = useState([]);
  const deleteItem = (id) => {
    const removeItem = cartRemoved(idMeal);
    setRemove(removeItem);
  };
  return (
    <div className="cart">
      <div className="cart-item">
        <img src={strMealThumb} alt="" />
        <div className="cart-info-body">
          <p>{strMeal}</p>
          <small>Quantity: {} </small>
        </div>
      </div>
      <a href="/">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => deleteItem(removeitem)}
        />
      </a>
    </div>
  );
};

export default Foodcart;
