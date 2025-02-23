"use client";
import React, { useEffect, useState } from "react";
import Gridlist from "../components/Gridview";
import Listview from "../components/Listview";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import Products_sidebar from "../components/Product_sidebar";
import { ProductContext } from "../Contexts/producrt_context";
import { useHeroSecContext } from "@/app/Contexts/hero_sec_context";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const {
    productsdata,
    gridViewfunc,
    listView,
    gridView,
    listviewfunc,
    sorting,
    searchDta,
    Alldata,
    load,
  } = ProductContext();

  const { products } = useHeroSecContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeSidebar = () => setIsMenuOpen(false);

  useEffect(() => {
    Alldata();
  }, [products]);

  if (load) {
    return <p className="text-center text-lg font-semibold my-10">Loading...</p>;
  }

  return (
    <div className="m-auto py-28 mb-20 px-5 md:px-16 bg-gray-50 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6" data-aos="fade-down">
        Our Products
      </h1>

      {/* Top Controls */}
      <div className="lg:flex justify-between items-center w-full bg-white p-4 shadow-md rounded-lg" data-aos="fade-up">
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-black" onClick={toggleMenu}>
            <MenuIcon className="h-7 w-7" />
          </button>

          <input
            className="border border-gray-300 p-2 rounded-md w-60 focus:ring-2 focus:ring-orange-500"
            placeholder="Search..."
            type="text"
            onChange={searchDta}
          />
        </div>

        <div className="flex items-center gap-6">
          <p className="text-gray-600 font-semibold">{`${productsdata.length} Items Available`}</p>

          <select
            className="border border-gray-300 p-2 rounded-md cursor-pointer focus:ring-2 focus:ring-orange-500"
            onChange={(e) => sorting(e)}
          >
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Alphabet (A-Z)</option>
            <option value="z-a">Alphabet (Z-A)</option>
          </select>

          <div className="flex gap-2">
            <MenuIcon
              className={`cursor-pointer p-1  rounded-md transition ${
                listView ? "text-orange-500 bg-orange-100" : "hover:bg-gray-200"
              }`}
             
              onClick={listviewfunc}
            />
            <AppsIcon
              className={`cursor-pointer p-1 rounded-md transition ${
                gridView ? "text-orange-500 bg-orange-100" : "hover:bg-gray-200"
              }`}
              onClick={gridViewfunc}
            />
          </div>
        </div>
      </div>

      {/* Sidebar & Products List */}
      <div className="flex flex-col relative lg:flex-row mt-6">
        <div>
          {isMenuOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden" onClick={closeSidebar} />
          )}
          <div
            className={`fixed top-0 left-0 h-full max-h-[800px] w-4/5 bg-white shadow-md transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform lg:static  lg:translate-x-0 lg:shadow-none`}
            data-aos="fade-right"
          >
            <Products_sidebar toggleMenu={toggleMenu} />
          </div>
        </div>

        <div className="flex-1 mt-5 lg:ml-10" data-aos="fade-left">
          {gridView && <Gridlist />}
          {listView && <Listview />}
        </div>
      </div>
    </div>
  );
};

export default Products;
