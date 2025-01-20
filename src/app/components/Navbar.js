"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Add_to_cart_conetxt_data } from "../Contexts/add_to_cart_context";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { totalCart } = Add_to_cart_conetxt_data();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkStyle = (path) => {
    return pathname === path ? "text-blue-700  underline" : "text-black";
  };

  return (
    <div>
      <nav className="py-3  shadow shadow-black text-black bg-gray-50 fixed top-0 w-full mt-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">
              <div className="font-bold cursor-pointer flex text-1xl ">
                <Link href="/">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="loogo.png"
                    alt="my pic"
                  />
                </Link>
                <Link href="/" className="mt-2 ml-2">
                  AthleticEdge
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Responsive navigation links */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:hidden absolute top-16 left-0 py-10 w-screen h-screen shadow-md bg-gray-50`}
            >
              <div onClick={toggleMenu} className="grid place-items-center">
                <Link href="/">
                  <p className={`hover:text-blue-700 mt-3 ml-3  ${getLinkStyle("/")}`}>Home</p>
                </Link>
                <Link href="/about">
                  <p className={`hover:text-blue-700 mt-3 my-3 ml-3  ${getLinkStyle("/about")}`}>About</p>
                </Link>
                <Link href="/products">
                  <p className={`hover:text-blue-700 mt-3 ml-3  ${getLinkStyle("/products")}`}>Products</p>
                </Link>
                <Link href="/contact">
                  <p className={`hover:text-blue-700 mt-3 ml-3  ${getLinkStyle("/contact")}`}>Contact</p>
                </Link>
                <Link href="/Add_to_cart">
                  <div className="relative">
                    <h1>
                      <NotificationsActiveIcon />
                    </h1>
                    <p className="text-red-500 absolute bottom-2 font-bold left-3 bg-gray-500 rounded-full w-6 h-6 text-center">
                      {totalCart}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop navigation links */}
            <div className="hidden md:flex space-x-4 ">
              <Link href="/">
                <p className={` ${getLinkStyle("/")}`}>Home</p>
              </Link>
              <Link href="/about">
                <p className={` ${getLinkStyle("/about")}`}>About</p>
              </Link>
              <Link href="/products">
                <p className={` ${getLinkStyle("/products")}`}>Products</p>
              </Link>
              <Link href="/contact">
                <p className={` ${getLinkStyle("/contact")}`}>Contact</p>
              </Link>
              <Link href="/Add_to_cart">
                <div className="relative">
                  <h1>
                    <NotificationsActiveIcon />
                  </h1>
                  <p className="text-red-500 absolute bottom-3 font-bold left-3 bg-gray-500 rounded-full w-6 h-6 text-center">
                    {totalCart}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
