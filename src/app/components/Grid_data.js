import React from "react";

const Grid_data = ({ image, name, price, company }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <p className="text-gray-500 text-sm uppercase">{company}</p> {/* Company Name */}
        <h3 className="text-lg font-semibold">{name}</h3> {/* Product Name */}
        <p className="text-orange-500 font-bold text-lg">${price}</p> {/* Price */}
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-md w-full hover:bg-orange-600 transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Grid_data;
