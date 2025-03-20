import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/Context";
import Items from "./Items";
import { IoMdArrowDropright } from "react-icons/io";

function Products() {
  const { products,input,setInput } = useContext(ShopContext);
  const [items, setItems] = useState([]);
  const [showfilter, setShowfilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory  ,setSubcategory] = useState([])

  


  

  

  const filteredItems = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // subcaterory
  const subFiltereditems = (e) =>{
    
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    }
    else{
      setSubcategory((prev)=>[...prev,e.target.value])
      
    }
  }
  

  const applyfilter = () => {

    
    let productsCopy = products.slice();
  
    if (input) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(input.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    
    if (subcategory .length > 0) {
      productsCopy = productsCopy.filter((itm) => subcategory .includes(itm.subCategory))
    }
    setItems(productsCopy)
  };
  
  
  
  useEffect(() => {
    applyfilter();
  }, [category, subcategory, input]);

  const arrowrotate = () => {
    setShowfilter(!showfilter);
  };

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <div
      className={`flex flex-col sm:flex-col  lg:flex-row  px-4 sm:p-8  py-10`}
    >
      <div>
        <div className="sm:min-w-60 flex flex-col">
          <div className="flex flex-row items-center gap-2 ">
            <p className="text-2xl Fontstyle mb-5">Filter</p>
            <IoMdArrowDropright
              onClick={arrowrotate}
              className={`mb-3 text-2xl cursor-pointer ${
                showfilter
                  ? "rotate-90 transition duration-300 ease-in-out"
                  : ""
              }`}
            />
          </div>
          <div className={`${showfilter ? "block  " : "hidden "} `}>
            <div className="flex  flex-col gap-3 mb-7 lg:w-full w-40 border-gray-300 border p-3 ">
              <p className="Fontstyle text-sm ">Catagories</p>
              <div>
                <p className="italic flex gap-3">
                  <input
                    className="w-3 cursor-pointer"
                    type="checkbox"
                    value="Men"
                    onChange={filteredItems}
                  />
                  Men
                </p>

                <p className="italic flex gap-3">
                  <input
                    className="w-3 cursor-pointer"
                    type="checkbox"
                    value="Women"
                    onChange={filteredItems}
                  />
                  Women
                </p>

                <p className="italic flex gap-3">
                  <input
                    className="w-3 cursor-pointer"
                    type="checkbox"
                    value="Kids"
                    onChange={filteredItems}
                  />
                  Kids
                </p>
              </div>
            </div>
            {/* subfilter */}
            <div className="flex  flex-col gap-3 mb-7 lg:w-full w-40  border-gray-300 border p-3 ">
              <p className="Fontstyle text-sm ">Type</p>
              <div>
                <p className="italic flex gap-3">
                  <input
                    className="w-3 cursor-pointer"
                    type="checkbox"
                    value="Topwear"
                    onChange={subFiltereditems}
                  />
                  Topwear
                </p>

                <p className="italic flex gap-3">
                  <input
                    className="w-3 cursor-pointer"
                    type="checkbox"
                    value="Bottomwear"
                    onChange={subFiltereditems}


                  />
                  Bottemwear
                </p>

                <p className="italic flex gap-3">
                  <input
                    className="w-3 cursor-pointer"
                    type="checkbox"
                    value="Winterwear"
                    onChange={subFiltereditems}

                  />
                  Winterwere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* filtred componenet */}
      <div className="lg:ml-8  border flex-1 rounded-xl p-3 ">
        <div className="flex gap-2 items-center justify-center">
          <p className="w-8 sm:w-12 h-[2px] sm:h-[3px] bg-gray-700 mb-3"></p>
          <p className="mb-4 Fontstyle">Products for you</p>
          <p className="w-8 sm:w-12 h-[2px] sm:h-[3px] bg-gray-700 mb-3"></p>
        </div>
        <div className="grid gap-1 sm:gap-3 gap-y-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  w-full ">
          {items.map((item, index) => (
            <Items
              key={index}
              name={item.name}
              image={item.image}
              id={item._id}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
