import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Food.css";
const Food = ({ food }) => {
  const { strMeal, strMealThumb, strInstructions, idMeal } = food;
  return (
    <article className="food-card">
      <img src={strMealThumb} alt="" />
      <div className="food-body">
        <h4>{strMeal}</h4>
        <p>
          {strInstructions.length > 50
            ? strInstructions.slice(0, 100) + " ..."
            : strInstructions}
        </p>
      </div>
      <a href="/" className="btn">
        <span className="btn-text">Add To Cart</span>{" "}
        <FontAwesomeIcon icon={faShoppingBag} />
      </a>
    </article>
  );
};

export default Food;
