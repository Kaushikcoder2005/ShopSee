import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Contact from "./Components/Contact.jsx";
import Products from "./Components/Products.jsx";
import ProductView from "./Components/ProductView.jsx";
import Cart from "./Components/Cart.jsx";
import Payment from "./Components/Payment.jsx";


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/productview/:proId" element={<ProductView />} />
      <Route path="/payment" element={<Payment/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
