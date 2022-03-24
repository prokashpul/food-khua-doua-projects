import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Foodcart from "../Foodcart/Foodcart";
import "./Foods.css";
const Foods = () => {
  // load api data
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  //  button add click handel
  const addToCart = (food) => {
    const newFoods = [...cart, food];
    setCart(newFoods);
  };
  console.log(cart);
  return (
    <div className="food-page">
      <section className=" container">
        <h3>Food Items:</h3>
        <div className="food-cards">
          {foods.map((food, index) => (
            <Food food={food} key={index} addToCart={addToCart}></Food>
          ))}
        </div>
      </section>
      <section className="food-cart">
        <div className="cart-info">
          <h4>Order Details:</h4>
          {cart.map((cart, index) => (
            <Foodcart cart={cart} key={index}></Foodcart>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Foods;
