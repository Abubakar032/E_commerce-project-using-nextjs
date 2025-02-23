import React from "react";
import { useHeroSecContext } from "../Contexts/hero_sec_context";
import Product from "../singleproducts/page";

const Wrapeed = () => {
  const { featureProducts = [] } = useHeroSecContext();

  return (
    <div className="mt-20 lg:mt-10">
      {/* Section Container */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-wide">
              Check Now
            </p>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Feature Products
            </h2>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureProducts.map((currentItem, index) => (
              <div
                key={currentItem.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Product Image */}
                <div className="relative w-full h-64 bg-gray-200">
                  <img
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-black">
                    {currentItem.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {currentItem.category}
                  </p>

                  {/* View Details Button */}
                  <button className="mt-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapeed;
