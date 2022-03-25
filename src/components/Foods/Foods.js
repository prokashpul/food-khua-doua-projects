import React, { useEffect, useState } from "react";
import { cartDataStore, deleteItem, getCart } from "../../utilities/localstore";
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
  // localstore data useEffect
  useEffect(() => {
    const getCartData = getCart();
    let saveFood = [];
    for (const id in getCartData) {
      const findFood = foods.find((food) => food.idMeal === id);
      if (findFood) {
        const quantity = getCartData[id];
        findFood.quantity = quantity;
        saveFood.push(findFood);
      }
    }
    setCart(saveFood);
  }, [foods]);
  //  button add click handel
  const addToCart = (food) => {
    let newOrders = [];
    const exists = cart.find((f) => f.idMeal === food.idMeal);

    if (!exists) {
      food.quantity = 1;
      newOrders = [...cart, food];
    } else {
      const rest = cart.filter((f) => f.idMeal !== food.idMeal);
      food.quantity = food.quantity + 1;
      newOrders = [...rest, exists];
    }
    setCart(newOrders);
    cartDataStore(food.idMeal);
  };
  // deleteItem
  const deleteAll = () => {
    deleteItem();
  };
  // console.log(cart);
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
          <h4>Food Items: {cart.length}</h4>
          {cart.map((cart) => (
            <Foodcart cart={cart} key={cart.idMeal}></Foodcart>
          ))}

          <a href="/" className="btn" onClick={() => deleteAll()}>
            Delete All
          </a>
        </div>
      </section>
    </div>
  );
};

export default Foods;
