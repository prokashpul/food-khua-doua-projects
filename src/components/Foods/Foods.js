import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./Foods.css";
const Foods = () => {
  // load api data
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  console.log(foods);
  return (
    <div className="food-page">
      <section className=" container">
        <h3>Food Items:</h3>
        <div className="food-cards">
          {foods.map((food, index) => (
            <Food food={food} key={index}></Food>
          ))}
        </div>
      </section>
      <section className="food-cart">
        <h4>Order Details:</h4>
      </section>
    </div>
  );
};

export default Foods;
