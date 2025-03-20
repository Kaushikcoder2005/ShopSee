import React,{useEffect,useContext} from "react";
import { assets } from "../assets/frontend_assets/assets";
import LatestProducts from "./LatestProducts";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context/Context";



function Home() {


  return (
    <>
       <div className=" bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-14 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Text Content */}
            <div className="w-full sm:w-1/2 p-8 sm:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 Fontstyle">
                Discover Our Premium Products
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8  Fontstyle">
                Explore our carefully curated collection of products designed for your everyday needs.
              </p>
              <NavLink to="/products" className="bg-indigo-600 Fontstyle hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Shop Now
              </NavLink>
            </div>
            
            {/* Image */}
            <div className="w-full sm:w-1/2">
              <img 
                src={assets.hero_img} 
                alt="Featured Products" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

       
      </div>
      
      <div>
          <LatestProducts/>
      </div>
    </>
  );
}

export default Home;
