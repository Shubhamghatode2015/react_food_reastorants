import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "../reducer/reducer";

import Products from "../components/Products";

const Cart = createContext();

const Context = ({ children }) => {
  const [myData] = useState(Products);

  const [state, dispatch] = useReducer(cartReducer, {
    myData: myData,
    cart: [],
  });

  console.log(myData);

  // const fetchData = async () => {
  //   const { data } = await axios.get(
  //     "https://bitbucket.org/punitdiwan/coding-challange/raw/08a0e129e1e3992a6d3d87d737332dc7ca7a79e4/data/feeds.json");
  //   setMyData(data);
  //   dispatch({
  //     type: "ADD_PRODUCTS",
  //     payload: myData
  //   });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
