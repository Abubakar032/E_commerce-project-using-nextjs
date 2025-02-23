"use client";
import React, { useEffect } from "react";
import { ProductContext } from "../Contexts/producrt_context";
import Grid_data from "./Grid_data";
import AOS from "aos";
import "aos/dist/aos.css";

const Grid_view = () => {
  const { productsdata } = ProductContext();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!productsdata) {
    return <p className="text-center text-gray-500 text-lg">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {productsdata.map((currentItem, index) => (
        <div key={index} data-aos="fade-up">
          <Grid_data {...currentItem} />
        </div>
      ))}
    </div>
  );
};

export default Grid_view;
