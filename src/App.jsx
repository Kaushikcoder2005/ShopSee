import { useContext,useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ShopContextProvider, { ShopContext } from "./Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  

  return (
    <>
   

      <ShopContextProvider>
        <Header />
        <ToastContainer/>
        <Outlet />
        <Footer />
      </ShopContextProvider>
  

    </>
  );
}

export default App;
