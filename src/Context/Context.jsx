import { createContext, useState,useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";
import {  toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [total, setTotal] = useState(0);


  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
  
    
    if (!size) {
        toast.error("Please select the size!!")
        return
    }
    
    
    if (cartData[itemId]) {                     //executing after
      if (cartData[itemId][size]) {             // executing when size is in the cartData then if condition is true
        cartData[itemId][size] += 1;            // if cartData has an ID then it has an object inside it stored size then
      }                                         // it will add side +1    
      else {                                    
        cartData[itemId][size] = 1;             // else add new itemid or size to it
      }
    } else {                                    //executing before
      cartData[itemId] = {};                    //adding the itemid and set a object as a value
      cartData[itemId][size] = 1;               // inside that object set the value 1
    }
   
    setCartItems(cartData);                     // setting the cart items
    
  };
  // console.log(cartItems);
  
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {                // in cartItems object getting key by the name of items
      for (const item in cartItems[items]) {         // checking it
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];      // increasing the total count
          }
        } catch (error) {
          console.error(error);                        // if getting error then show it in console
        }
      }
    }
    return totalCount;
  };
  
  // const { products, currency, cartItems, setCartItems,total,setTotal } = useContext(ShopContext);

  useEffect(() => {

    const data = window.localStorage.getItem("cart");
    if (data) {
      const parsedData = JSON.parse(data);
      // Only set if there's actually data to prevent unnecessary override
      if (Object.keys(parsedData).length > 0) {
        setCartItems(parsedData);
      }
    }
  }, []); // Empty dependency array for mount-only
  
  useEffect(() => {
    // Don't save if cartItems is empty to prevent clearing localStorage
    if (Object.keys(cartItems).length > 0) {
      window.localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]); // Run when cartItems changes

  const currency = "$";
  const values = {
    products,
    currency,
    input,
    setInput,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    total,
    setTotal
  };

  return (
    <ShopContext.Provider value={values}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
