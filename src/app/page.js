"use client";
import { useEffect } from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FeatureProducts from "./components/Feature_products";
import HeroSlider from "./components/HeroHeader";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <HeroSlider />

      <section className="py-16 bg-white">
        <FeatureProducts />
      </section>

      {/* <div className="grid lg:grid-cols-3 gap-8 max-w-[1440px] mx-8  2xl:mx-auto py-20">
        <div
          className="shadow-lg p-6 text-orange-500  bg-gray-100 rounded-lg flex flex-col items-center justify-center space-y-4 transition duration-300 hover:shadow-xl"
          data-aos="fade-up"
        >
          <div className="flex items-center bg-white justify-center w-32 h-32 rounded-full ">
            <DeliveryDiningIcon className=" text-orange-500 w-28 h-28  "></DeliveryDiningIcon>
          </div>

          <p className="font-bold text-lg text-gray-700">
            Super Fast & Free Delivery
          </p>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div
            className="shadow-lg p-6 bg-gray-100 rounded-lg flex flex-col items-center space-y-4 transition duration-300 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center bg-white justify-center w-32 h-32 rounded-full ">
              <AdminPanelSettingsIcon className=" text-orange-500 w-28 h-28  "></AdminPanelSettingsIcon>
            </div>
            <p className="font-bold text-lg text-gray-700">
              Non-Contact Shopping
            </p>
          </div>

          <div
            className="shadow-lg p-6 bg-gray-100 rounded-lg flex flex-col items-center justify-center space-y-4 transition duration-300 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center bg-white justify-center w-32 h-32 rounded-full ">
              <FavoriteBorderOutlinedIcon className=" text-orange-500 w-28 h-28  "></FavoriteBorderOutlinedIcon>
            </div>
            <p className="font-bold text-lg text-gray-700">
              Money-Back Guarantee
            </p>
          </div>
        </div>

        <div
          className="shadow-lg p-6 bg-gray-100 rounded-lg justify-center flex flex-col items-center space-y-4 transition duration-300 hover:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex items-center bg-white justify-center w-32 h-32 rounded-full ">
            <PaidOutlinedIcon className=" text-orange-500 w-28 h-28  "></PaidOutlinedIcon>
          </div>
          <p className="font-bold text-lg text-gray-700">
            Super Secure Payment System
          </p>
        </div>
      </div> */}

      {/* Trusted Companies Section */}
      <section className="bg-gray-100 py-12 w-full">
        <p className="text-center text-lg font-semibold" data-aos="fade-up">
          Trusted by <span className="text-orange-500 font-bold">3000+</span>{" "}
          companies
        </p>
        <div
          className="mx-8 max-w-[1440px] items-center justify-items-center w-full  2xl:mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-6"
          data-aos="zoom-in"
        >
          {["amazon.png", "com.png", "adidas.png", "apple.png"].map(
            (logo, index) => (
              <div key={index} className="flex justify-center shadow-md items-center rounded-full w-32 h-32 bg-white ">
                <img
                  src={logo}
                  alt={logo}
                  className="w-24 h-24  "
                />
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
