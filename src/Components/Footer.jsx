import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] py-20 p-2 sm:px-16 gap-7">
        <div className="mx-7 ">
          <img src={assets.logo} className="w-32" alt="" />
          <p className="text-xs mt-5 Fontstyle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            architecto ex error saepe exercitationem numquam deserunt
            perferendis, necessitatibus maiores? Quos fugit enim aliquam
            architecto minus labore eligendi culpa at voluptatum?
          </p>
        </div>
        <div className="mx-7">
          <p className="text-lg Fontstyle">Company</p>
          <div className="flex flex-col gap-2 text-sm ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500 underline" : "text-black"
                } hover:underline hover:text-orange-500`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500 underline" : "text-black"
                } hover:underline hover:text-orange-500`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500 underline" : "text-black"
                } hover:underline hover:text-orange-500`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="products"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500 underline" : "text-black"
                } hover:underline hover:text-orange-500`
              }
            >
              Products
            </NavLink>
          </div>
        </div>
        <div className="mx-7 flex flex-col gap-5 Fontstyle">
          <p className="text-2xl">Our support</p>
          <p>+857484654</p>
          <p className="Fontstyle">kaushikmukherjee2709@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
