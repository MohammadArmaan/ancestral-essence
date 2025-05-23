'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import banner from '@/assets/banner.jpg';
import banner2 from '@/assets/banner2.avif';
import banner3 from '@/assets/banner3.avif';

const banners = [banner, banner2, banner3];

export default function HeroSlider() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) swiperRef.current.slideNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextBtn = document.getElementById('swiper-next');
    const prevBtn = document.getElementById('swiper-prev');

    nextBtn?.addEventListener('click', () => swiperRef.current?.slideNext());
    prevBtn?.addEventListener('click', () => swiperRef.current?.slidePrev());

    return () => {
      nextBtn?.removeEventListener('click', () => swiperRef.current?.slideNext());
      prevBtn?.removeEventListener('click', () => swiperRef.current?.slidePrev());
    };
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      pagination={{ clickable: true }}
      className="h-full w-full"
    >
      {banners.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full">
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
