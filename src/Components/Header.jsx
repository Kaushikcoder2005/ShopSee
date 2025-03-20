import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { ShopContext } from "../Context/Context";

function Header() {
  const [inpHide, setInpHide] = useState(false);
  const { input, setInput, getCartCount } = useContext(ShopContext);
  // const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showProfile, setShowProfile] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const handelChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="bg-gray-900 sticky top-0 z-50  px-4 py-2 w-full ">
      <div className=" flex justify-between items-center">
        <div
          className="relative flex  justify-center items-center"
          onMouseEnter={() => {
            if (window.innerWidth <= 1024) setIsHovered(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth <= 1024) setIsHovered(false);
          }}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="p-3 text-xl text-gray-300 Fontstyle">ShopSe</span>
            <BiSolidDownArrow className="h-4 w-4 text-gray-500 lg:hidden" />
          </div>

          <div
            className={`${
              isHovered ? "block" : "hidden"
            } flex flex-col absolute top-11 bg-slate-800 left-1/2 -translate-x-1/2 w-28 gap-[2px] p-1 rounded-xl font-medium shadow-lg`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pl-3 py-1 ${
                  isActive ? "text-orange-300" : "text-white"
                } hover:bg-black hover:text-orange-500 rounded-lg transition-colors duration-200`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `pl-3 py-1 ${
                  isActive ? "text-orange-300" : "text-white"
                } hover:bg-black hover:text-orange-500 rounded-lg transition-colors duration-200`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pl-3 py-1 ${
                  isActive ? "text-orange-300" : "text-white"
                } hover:bg-black hover:text-orange-500 rounded-lg transition-colors duration-200`
              }
            >
              Contact us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `pl-3 py-1 ${
                  isActive ? "text-orange-300" : "text-white"
                } hover:bg-black hover:text-orange-500 rounded-lg transition-colors duration-200`
              }
            >
              Products
            </NavLink>
          </div>
        </div>

        <div className="flex ">
          <div className=" hidden lg:flex items-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500"
                } py-1 sm:py-2 mx-1 sm:mx-2 px-1 sm:px-2 text-sm sm:text-base font-semibold hover:text-orange-500 border-[1px] rounded-lg border-gray-100 shadow-lg hover:bg-slate-100 hover:outline-none hover:ring-2 hover:ring-orange-100`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500"
                } py-1 sm:py-2 mx-1 sm:mx-2 px-1 sm:px-2 text-sm sm:text-base font-semibold hover:text-orange-500 border-[1px] rounded-lg border-gray-100 shadow-lg hover:bg-slate-100 hover:outline-none hover:ring-2 hover:ring-orange-100`
              }
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500"
                } py-1 sm:py-2 mx-1 sm:mx-2 px-1 sm:px-2 text-sm sm:text-base font-semibold hover:text-orange-500 border-[1px] rounded-lg border-gray-100 shadow-lg hover:bg-slate-100 hover:outline-none hover:ring-2 hover:ring-orange-100`
              }
            >
              Contact us
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500"
                } py-1 sm:py-2 mx-1 sm:mx-2 px-1 sm:px-2 text-sm sm:text-base font-semibold hover:text-orange-500 border-[1px] rounded-lg border-gray-100 shadow-lg hover:bg-slate-100 hover:outline-none hover:ring-2 hover:ring-orange-100`
              }
            >
              Products
            </NavLink>
          </div>

          <div className="relative flex items-center justify-center ml-2 mr-1">
            <div
              className={`flex items-center transition-all duration-300 ease-in-out ${
                inpHide ? "w-full" : "w-auto"
              }`}
            >
              <input
                className={`
                  transition-all duration-300 ease-in-out
                  ${
                    inpHide
                      ? "w-20  sm:w-36 md:w-56 lg:w-56 opacity-100"
                      : "w-0 opacity-0"
                  } 
                  px-2 rounded-lg h-8
                `}
                onChange={handelChange}
                value={input}
                type="text"
                placeholder="Search..."
              />
              <button
                onClick={() => setInpHide((prev) => !prev)}
                className="flex items-center justify-center w-9 h-8 ml-1"
              >
                {inpHide ? (
                  <RxCross2 className="text-gray-500 w-6 h-6" />
                ) : (
                  <FaSearch className="text-gray-500 w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div className="flex ">
            <ul className="flex items-center justify-center gap-2 ">
              <li>
                <NavLink to="/cart" className="relative">
                  <GrCart className=" w-9 h-6 rounded-full text-gray-500 hover:text-orange-500 dark:hover:bg-white hover:bg-white p-1 box-content " />
                  <p className="absolute right-[-2px] bottom-[-5px]  w-4 text-center leading-4 text-xs text-white aspect-square rounded-full text-[8px]">
                    {getCartCount()}
                  </p>
                </NavLink>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {/* Create a container that includes both the icon and dropdown */}

                <div className="flex flex-col items-end">
                  <NavLink className="focus:outline-none">
                    <VscAccount className="w-9 text-gray-500 h-6 rounded-full hover:text-orange-500 dark:hover:bg-white hover:bg-white p-1 box-content" />
                  </NavLink>

                  {/* Add a invisible bridge to prevent hover gap */}
                  <div className="absolute w-full h-2 top-full"></div>
                  

                  {/* Dropdown menu */}
                  <ul
                    className={`bg-slate-700 p-2 rounded-xl absolute top-10 right-0 min-w-[120px] z-50 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <li onClick={()=>setShowProfile(true)} className="hover:bg-slate-400 hover:rounded-lg hover:text-black px-2 py-1 cursor-pointer text-white">
                      {showProfile? "Myprofile":"login"}
                    </li>
                    <li className="hover:bg-slate-400 hover:rounded-lg hover:text-black px-2 py-1 cursor-pointer text-white">
                      Orders
                    </li>
                    <li className="hover:bg-slate-400 hover:rounded-lg hover:text-black px-2 py-1 cursor-pointer text-white">
                      Logout
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
