import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/Context";

function Items({ id, name, image, description, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/productview/${id}`}
      className=" hover:scale-[1.03]   transition-transform duration-300  bg-gradient-to-r from-[#fafcdb] via-[#d0a3f9]/[0.25] to-[#b3f0f1] shadow-lg rounded-xl  overflow-hidden p-1 sm:p-3 "
    >
      <img
        className="w-full rounded-xl object-cover "
        src={image[0]} 
        alt="Product"
      />
      <div className="p-2">
        <h3 className="text-gray-900 Fontstyle font-bold text-[17px] sm:text-lg">{name}</h3>
        
        <div className="flex items-center mt-3">
          <span className="Fontstyle text-gray-900 font-bold text-[12px]">
            {currency}
            {price}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Items;
