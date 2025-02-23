import React from "react";
import { useHeroSecContext } from "../Contexts/hero_sec_context";
import Product from "../singleproducts/page";

const Wrapeed = () => {
  const { featureProducts = [] } = useHeroSecContext();

  return (
    <div className="mt-20 lg:mt-10">
      {/* Section Container */}
      <div className="w-full  py-16">
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
                <Product key={index} {...currentItem}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapeed;





    