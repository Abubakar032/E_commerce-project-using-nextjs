"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSlider = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const slides = [
        { image: "/slider/sneaker-1.jpg", text: "Elevate Your Game", buttonText: "Shop Now", link: "/products" },
        { image: "/slider/sneaker-2.jpg", text: "Performance & Style", buttonText: "Explore", link: "/products" },
    ];

    return (
        <div className="relative w-full h-[70vh] lg:h-[100vh]">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.text}
                                layout="fill"
                                objectFit="cover"
                                className="brightness-75"
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-center text-center text-white px-6 md:px-12" data-aos="fade-up">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.text}</h2>
                                <Link href={slide.link}>
                                    <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                                        {slide.buttonText}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
