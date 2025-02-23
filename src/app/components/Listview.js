"use client";
import React from "react";
import { ProductContext } from "../Contexts/producrt_context";
import Link from "next/link";

const Listview = () => {
  const { productsdata } = ProductContext();

  if (!productsdata) {
    return <p className="text-center text-gray-500 text-lg">Loading...</p>;
  }

  return (
    <div className="space-y-6">
      {productsdata.map((product) => {
        const { image, category, _id, price, description, name } = product;

        return (
          <div
            key={_id}
            className="grid lg:grid-cols-2 md:grid-cols-2 border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="overflow-hidden">
              <Link href={`/singleproducts/${_id}`}>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-64 object-cover transition-transform transform hover:scale-105"
                />
              </Link>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h5 className="text-lg font-bold text-gray-800">{name}</h5>
                <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
                <p className="text-gray-600 text-sm mb-3">{description.slice(0, 150)}...</p>
                <p className="text-orange-500 font-bold text-lg">Price: ${price}</p>
              </div>

              {/* View Details Button */}
              <Link href={`/singleproducts/${_id}`}>
                <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-all w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listview;
