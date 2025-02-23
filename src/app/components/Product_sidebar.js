"use client";
import React, { useState } from "react";
import { ProductContext } from "../Contexts/producrt_context";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useHeroSecContext } from "../Contexts/hero_sec_context";

const ProductsSidebar = ({ toggleMenu }) => {
  const { products } = useHeroSecContext();
  const {
    clickFilterItems,
    Alldata,
    companySelect,
    color,
    filterColorData,
    price,
    maxPrice,
    lowestPrice,
    filterRangeData,
  } = ProductContext();

  const [selectedColor, setSelectedColor] = useState("");

  const uniqueCompanies = products
    ? Array.from(new Set(products.map((product) => product.company)))
    : [];
  const uniqueFilterData = products
    ? Array.from(new Set(products.map((product) => product.category)))
    : [];

  return (
    <div className="border px-5 py-6 bg-white shadow-md rounded-lg w-full md:w-72">
      {/* Sidebar Header */}
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold text-gray-800">Filters</h5>
        <button onClick={toggleMenu} className="md:hidden">
          <CloseIcon className="text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Categories Section */}
      <div className="mt-6">
        <h5 className="text-lg font-semibold text-gray-700">Category</h5>
        <p
          className="cursor-pointer text-gray-600 hover:text-orange-500"
          onClick={Alldata}
        >
          All
        </p>
        {uniqueFilterData.map((category, index) => (
          <p
            key={index}
            onClick={() => clickFilterItems(category)}
            className="cursor-pointer text-gray-800 hover:text-orange-500 mt-2"
          >
            {category}
          </p>
        ))}
      </div>

      {/* Company Filter */}
      <div className="mt-6">
        <h5 className="text-lg font-semibold text-gray-700">Company</h5>
        <select
          onChange={companySelect}
          className="w-full mt-2 p-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {uniqueCompanies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* Color Filter */}
      <div className="mt-6">
        <h5 className="text-lg font-semibold text-gray-700">Colors</h5>
        <div className="flex items-center gap-2 mt-2">
          <p
            className="cursor-pointer text-gray-600 hover:text-orange-500"
            onClick={Alldata}
          >
            All
          </p>
          {color.map((currentColor, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedColor(currentColor);
                filterColorData(currentColor);
              }}
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: currentColor }}
            >
              {selectedColor === currentColor && (
                <CheckIcon className="text-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mt-6">
      <p className="font-bold mt-2">Price: {price}</p>
          <input type="range" value={price} min={lowestPrice} max={maxPrice} name="price" onChange={filterRangeData} />

      </div>

      {/* Clear Filters Button */}
      <button
        type="button"
        className="mt-6 w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-red-600 border border-red-600 transition-all"
        onClick={Alldata}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductsSidebar;
