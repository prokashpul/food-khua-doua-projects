import React from "react";
import "./Foodcart.css";
const Foodcart = ({ cart }) => {
  return (
    <div className="cart">
      <p>{cart.strMeal}</p>
    </div>
  );
};

export default Foodcart;
