"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu"; 
import CloseIcon from "@mui/icons-material/Close"; 
import { Add_to_cart_conetxt_data } from "../Contexts/add_to_cart_context";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const { totalCart } = Add_to_cart_conetxt_data();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLinkStyle = (path) =>
    pathname === path
      ? "text-orange-500 underline"
      : "text-gray-700 hover:text-orange-500 transition";

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 fixed top-0 w-full z-50 bg-white transition-shadow ${
        hasShadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img className="w-12 h-12 rounded-full" src="loogo.png" alt="Logo" />
          <span className="text-xl font-bold text-gray-800">AthleticEdge</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/products", label: "Products" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className={getLinkStyle(href)}>
              {label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link href="/Add_to_cart" className="relative">
            <NotificationsActiveIcon className="text-gray-700 hover:text-orange-500 transition" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {totalCart}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon className="h-7 w-7 text-gray-800 absolute z-[1000] top-4 right-4" />
          ) : (
            <MenuIcon className="h-7 w-7 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Background Update */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar Menu */}
          <div className="fixed top-0 right-0 w-64 h-full bg-gray-100 z-50 shadow-lg flex flex-col items-center py-10 space-y-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/products", label: "Products" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className={getLinkStyle(href)} onClick={toggleMenu}>
                {label}
              </Link>
            ))}

            {/* Cart Icon */}
            <Link href="/Add_to_cart" className="relative" onClick={toggleMenu}>
              <NotificationsActiveIcon className="text-gray-700 hover:text-orange-500 transition" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {totalCart}
              </span>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
