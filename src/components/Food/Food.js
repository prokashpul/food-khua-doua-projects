import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Food.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Food = ({ food, addToCart }) => {
  const { strMeal, strMealThumb, strInstructions } = food;
  AOS.init();
  return (
    <article className="food-card" data-aos="zoom-in">
      <img src={strMealThumb} alt="" />
      <div className="food-body">
        <h4>{strMeal}</h4>
        <p>
          {strInstructions.length > 50
            ? strInstructions.slice(0, 100) + " ..."
            : strInstructions}
        </p>
      </div>
      <button className="btn" onClick={() => addToCart(food)}>
        <span className="btn-text">Add To Cart</span>
        <FontAwesomeIcon icon={faShoppingBag} />
      </button>
    </article>
  );
};

export default Food;
