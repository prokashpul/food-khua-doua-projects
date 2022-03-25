const cartDataStore = (id) => {
  console.log(id);
  let setCartInfo = getCart();
  // check duplicate id  and setLocalStore
  const numberOfCard = setCartInfo[id];
  if (numberOfCard) {
    const newCart = numberOfCard + 1;
    setCartInfo[id] = newCart;
  } else {
    setCartInfo[id] = 1;
  }

  localStorage.setItem("food-id", JSON.stringify(setCartInfo));
};
// localStore data gate
const getCart = () => {
  let getCartinfo = {};
  const getLocalData = localStorage.getItem("food-id");
  if (getLocalData) {
    getCartinfo = JSON.parse(getLocalData);
  }
  return getCartinfo;
};

// removed cart item
const cartRemoved = (id) => {
  const Foodcart = localStorage.getItem("food-id");
  if (Foodcart) {
    const removedCart = JSON.parse(Foodcart);
    if (id in removedCart) {
      delete removedCart[id];
      localStorage.setItem("food-id", JSON.stringify(removedCart));
    }
  }
};

const deleteItem = () => {
  localStorage.removeItem("food-id");
};

export { cartDataStore, getCart, cartRemoved, deleteItem };
