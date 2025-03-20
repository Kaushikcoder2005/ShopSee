import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/Context";
import { ShoppingCart } from "lucide-react";

function ProductView() {
  const { proId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === proId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [proId]);

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image Section */}
            <div className="lg:w-2/3 p-6 lg:p-8">
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-4 mt-4 lg:mt-0">
                  {productData.image.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setImage(item)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden ring-2 transition-all duration-300
                        ${image === item ? 'ring-blue-600 ring-offset-2 opacity-100 ' : 'opacity-70 ring-transparent hover:ring-blue-400'}`}
                    >
                      <img
                        src={item}
                        className="w-full h-full object-cover"
                        alt={`Product view ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 relative rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    alt="Main product view"
                  />
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="lg:w-1/3 p-6 lg:p-8 bg-gray-50">
              <div className="space-y-6">
                {/* Product Title & Price */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                    {productData.name}
                  </h1>
                  <p className="mt-4 text-3xl font-bold text-blue-600">
                    {productData.price} {currency}
                  </p>
                </div>

                {/* Description */}
                <div className="py-6 border-y border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {productData.description}
                  </p>
                </div>

                {/* Size Selection */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {productData.sizes?.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                          ${selectedSize === size 
                            ? 'bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-2'
                            : 'bg-white text-gray-800 ring-1 ring-gray-200 hover:ring-blue-600 hover:text-blue-600'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(productData._id, selectedSize)}
                  className={`w-full py-4 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-medium
                    transition-all duration-200 transform hover:scale-[1.02]
                  bg-blue-600 hover:bg-blue-700 active:bg-blue-800' 
                   `}
                 
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;