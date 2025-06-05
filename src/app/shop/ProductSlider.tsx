"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ShopProduct from "./ShopProduct";

interface ProductSliderProps {
  products: any[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        // Responsive breakpoints for slides per view and spacing
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="px-4"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product._id} className="pb-10">
            <div
              className={`transition-all duration-300 rounded-xl ${
                index === activeIndex
                  ? "scale-100 opacity-100 pointer-events-auto"
                  : "scale-90 opacity-70 pointer-events-none"
              }`}
            >
              <ShopProduct product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
