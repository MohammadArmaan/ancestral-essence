// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Image from 'next/image';
// import { useEffect, useRef } from 'react';
// import banner from '@/assets/banner.jpg';
// import banner2 from '@/assets/banner2.avif';
// import banner3 from '@/assets/banner3.avif';

// const banners = [banner, banner2, banner3];

// export default function HeroSlider() {
//   const swiperRef = useRef<any>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (swiperRef.current) swiperRef.current.slideNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const nextBtn = document.getElementById('swiper-next');
//     const prevBtn = document.getElementById('swiper-prev');

//     nextBtn?.addEventListener('click', () => swiperRef.current?.slideNext());
//     prevBtn?.addEventListener('click', () => swiperRef.current?.slidePrev());

//     return () => {
//       nextBtn?.removeEventListener('click', () => swiperRef.current?.slideNext());
//       prevBtn?.removeEventListener('click', () => swiperRef.current?.slidePrev());
//     };
//   }, []);

//   return (
//     <Swiper
//       modules={[Autoplay, Pagination]}
//       onSwiper={(swiper) => {
//         swiperRef.current = swiper;
//       }}
//       autoplay={{ delay: 5000, disableOnInteraction: false }}
//       loop
//       pagination={{ clickable: true }}
//       className="h-full w-full"
//     >
//       {banners.map((img, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative h-full w-full">
//             <Image
//               src={img}
//               alt={`Banner ${index + 1}`}
//               fill
//               className="object-cover"
//               priority={index === 0}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import banner from '@/assets/banner.jpg';
import banner2 from '@/assets/banner2.avif';
import banner3 from '@/assets/banner3.avif';

interface SlideContent {
  image: any;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slideContents: SlideContent[] = [
  {
    image: banner,
    title: "Nourish Your Pet's",
    subtitle: "Wild Instincts",
    description: "Premium natural pet food crafted with the finest ingredients for your beloved companion's health and happiness.",
    buttonText: "Shop Premium Food",
    buttonLink: "/shop"
  },
  {
    image: banner2,
    title: "Unleash Their",
    subtitle: "Natural Energy",
    description: "High-protein, grain-free recipes that fuel your pet's adventures and support their active lifestyle every day.",
    buttonText: "Discover Recipes",
    buttonLink: "/featured-products"
  },
  {
    image: banner3,
    title: "Healthy Pets,",
    subtitle: "Happy Hearts",
    description: "Vet-approved nutrition that strengthens immunity, improves digestion, and brings out your pet's natural vitality.",
    buttonText: "Learn More",
    buttonLink: "/about"
  }
];

export default function HeroSlider() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nextBtn = document.getElementById('swiper-next');
    const prevBtn = document.getElementById('swiper-prev');

    const handleNext = () => swiperRef.current?.slideNext();
    const handlePrev = () => swiperRef.current?.slidePrev();

    nextBtn?.addEventListener('click', handleNext);
    prevBtn?.addEventListener('click', handlePrev);

    return () => {
      nextBtn?.removeEventListener('click', handleNext);
      prevBtn?.removeEventListener('click', handlePrev);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary'
        }}
        className="h-full w-full hero-swiper"
      >
        {slideContents.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  <div 
                    className={`transition-all duration-1000 ${
                      activeIndex === index 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {/* Title Animation */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                      <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {slide.title}
                      </span>
                      <span className="block text-primary animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        {slide.subtitle}
                      </span>
                    </h1>
                    
                    {/* Description */}
                    <p 
                      className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in-up"
                      style={{ animationDelay: '0.6s' }}
                    >
                      {slide.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                      >
                        <Link href={slide.buttonLink}>
                          {slide.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        id="swiper-prev"
        className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        id="swiper-next"
        className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Custom Styles */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 2rem !important;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Scroll animations */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .scroll-animate.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card {
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.6s ease-out forwards;
        }

        .product-card {
          opacity: 0;
          transform: scale(0.9);
          animation: scaleIn 0.6s ease-out forwards;
        }

        .testimonial-card {
          opacity: 0;
          transform: translateX(-20px);
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .stats-card {
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.8s ease-out forwards;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Counter animation */
        .counter {
          transition: all 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}