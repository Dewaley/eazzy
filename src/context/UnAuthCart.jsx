import { useReducer, createContext, useContext } from "react";

const CartContext = createContext();
const initialState = localStorage.getItem("geeUnauthCart")
  ? JSON.parse(localStorage.getItem("geeUnauthCart"))
  : { items: [] };

// Define the reducer function to update the state
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Check if the item is already in the cart
      const existingItem = state.items.find(
        (item) => item.product_id === action.item.product_id
      );
      if (existingItem) {
        // If the item is already in the cart, update the caryQuantity
        return {
          items: state.items.map((item) => {
            if (item.product_id === action.item.product_id) {
              return {
                ...item,
                caryQuantity: item.caryQuantity + action.item.caryQuantity,
              };
            }
            localStorage.setItem("geeUnauthCart", JSON.stringify(state));
            return item;
          }),
        };
      } else {
        localStorage.setItem(
          "geeUnauthCart",
          JSON.stringify({
            items: [...state.items, action.item],
          })
        );
        // If the item is not in the cart, add it to the cart
        return {
          items: [...state.items, action.item],
        };
      }
    case "REMOVE_ITEM":
      // Find the index of the item in the cart
      const index = state.items.findIndex(
        (item) => item.product_id === action.item.product_id
      );
      console.log(state.items);
      console.log(action.item);
      // Remove the item from the cart
      localStorage.setItem(
        "geeUnauthCart",
        JSON.stringify({
          items: [
            ...state.items.slice(0, index),
            ...state.items.slice(index + 1),
          ],
        })
      );
      return {
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      };
    case "UPDATE_ITEM":
      if (action.item.caryQuantity === 0) {
        const index = state.items.findIndex(
          (item) => item.product_id === action.item.product_id
        );
        console.log(state.items);
        console.log(action.item);
        // Remove the item from the cart
        localStorage.setItem(
          "geeUnauthCart",
          JSON.stringify({
            items: [
              ...state.items.slice(0, index),
              ...state.items.slice(index + 1),
            ],
          })
        );
        return {
          items: [
            ...state.items.slice(0, index),
            ...state.items.slice(index + 1),
          ],
        };
      } else {
        return {
          items: state.items.map((item) => {
            if (item.product_id === action.item.product_id) {
              return {
                ...item,
                caryQuantity: action.item.caryQuantity,
              };
            }
            localStorage.setItem("geeUnauthCart", JSON.stringify(state));
            return item;
          }),
        };
      }
    default:
      return state;
  }
};

// Define the CartProvider component that wraps the rest of the application
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Define a custom hook to use the cart context in a functional component

export const UseCart = () => useContext(CartContext);
