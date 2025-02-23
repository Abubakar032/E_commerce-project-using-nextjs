"use client";
import Link from "next/link";
import FeatureProducts from "../components/Feature_products";

const About = () => {
  return (
    <>
      <div className="mb-56 lg:mb-1 pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* About Section */}
          <div className="grid lg:grid-cols-2 items-center gap-12 my-16">
            {/* Left Content */}
            <div
              className="space-y-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="text-orange-500 font-semibold uppercase tracking-wide">
                About Us
              </p>
              <h1 className="text-4xl font-bold text-gray-800">
                AthleticEdge E-commerce
              </h1>
              <p className="text-gray-600 leading-relaxed">
                The sportswear market is growing rapidly, driven by increasing
                health consciousness and a surge in sports and fitness
                activities. However, many existing online platforms fail to
                provide a user-friendly and comprehensive shopping experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our project, <span className="font-semibold">AthleticEdge</span>,
                seeks to address this gap by developing an intuitive and
                efficient mobile and web-based storefront tailored for
                sportswear. This platform will leverage modern web technologies
                and mobile frameworks to ensure accessibility, performance, and
                scalability.
              </p>

              {/* Button */}
              <div className="sm:flex sm:justify-start">
                <Link href="/products">
                  <button className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                    Check Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                src="f2.jpg"
                alt="about-image"
              />
            </div>
          </div>
        </div>
        <FeatureProducts />
      </div>
    </>
  );
};

export default About;
