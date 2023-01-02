import { createContext, useContext,useState } from "react";

export const ShoppingCartData = createContext({});

export const CartDataProvider = ({ children }) => {
  const [cartData,setCartData] = useState([])

  return (
    <ShoppingCartData.Provider value={[cartData,setCartData]}>
      {children}
    </ShoppingCartData.Provider>
  );
};

export const UseShoppingCartData = () => useContext(ShoppingCartData);