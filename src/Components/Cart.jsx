import React, { useContext, useState, useEffect } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { ShopContext } from "../Context/Context";
import {NavLink} from "react-router-dom"


const CartPage = () => {
  const { products, currency, cartItems, setCartItems,total,setTotal } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  
  

    
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  
  useEffect(() => {
    calculateTotal();
  }, [cartData, products]);
  
  const calculateTotal = () => {
    let sum = 0;
    cartData.forEach((item) => {
      const product = products.find((p) => p._id === item._id);
      if (product) {
        sum += product.price * item.quantity;
      }
    });
    setTotal(sum);
  };
  
  const handleQuantityChange = (productId, size, change) => {
    const updatedCartItems = { ...cartItems };
    
    if (!updatedCartItems[productId]) {
      updatedCartItems[productId] = {};
    }
    
    const currentQuantity = updatedCartItems[productId][size] || 0;
    const newQuantity = Math.max(0, currentQuantity + change);
    
    if (newQuantity === 0) {
      delete updatedCartItems[productId][size];
      if (Object.keys(updatedCartItems[productId]).length === 0) {
        delete updatedCartItems[productId];
      }
    } else {
      updatedCartItems[productId][size] = newQuantity;
    }
    
    setCartItems(updatedCartItems);
  };
  
  const handleDelete = (productId, size) => {
    const updatedCartItems = { ...cartItems };
    if (updatedCartItems[productId]) {
      delete updatedCartItems[productId][size];
      if (Object.keys(updatedCartItems[productId]).length === 0) {
        delete updatedCartItems[productId];
      }
    }
    setCartItems(updatedCartItems);
  };




  if (cartData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-500">Add some items to your cart to get started!</p>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cartData.map((item) => {
          const product = products.find((p) => p._id === item._id);
          if (!product) return null;

          return (
            <div
              key={`${item._id}-${item.size}`}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="font-medium text-gray-900">
                    {currency}
                    {product.price}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleQuantityChange(item._id, item.size, -1)}
                  >
                    <Minus className="h-4 w-4 text-gray-600" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleQuantityChange(item._id, item.size, 1)}
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    className="p-2 ml-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleDelete(item._id, item.size)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800">Total:</span>
          <span className="text-xl font-bold text-gray-900">
            {currency}
            {total.toFixed(2)}
          </span>
        </div>
        <NavLink to='/payment'>
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          Proceed to Checkout
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartPage;