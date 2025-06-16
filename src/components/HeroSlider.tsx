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
import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.png';

interface SlideContent {
  image: any;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  brandName: string;
}

const slideContents: SlideContent[] = [
  {
    image: banner1,
    title: 'Feed the Fascination.',
    subtitle: 'Awaken Instinct.',
    description: 'Turn Back to Nature.',
    buttonText: 'Shop Now',
    buttonLink: '/shop',
    brandName: 'Ancestral Essence',
  },
  {
    image: banner2,
    title: 'Captivate every bite.',
    subtitle: 'Feed the difference',
    description: 'with Ancestral Essence.',
    buttonText: 'Shop Now',
    buttonLink: '/shop',
    brandName: 'Ancestral Essence',
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const nextBtn = document.getElementById('swiper-next');
    const prevBtn = document.getElementById('swiper-prev');

    const handleNext = () => {
      setFadeOut(true);
      setTimeout(() => {
        swiperRef.current?.slideNext();
        setFadeOut(false);
      }, 1200); // Delay to allow fade out
    };

    const handlePrev = () => {
      setFadeOut(true);
      setTimeout(() => {
        swiperRef.current?.slidePrev();
        setFadeOut(false);
      }, 1200);
    };

    nextBtn?.addEventListener('click', handleNext);
    prevBtn?.addEventListener('click', handlePrev);

    return () => {
      nextBtn?.removeEventListener('click', handleNext);
      prevBtn?.removeEventListener('click', handlePrev);
    };
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
        }}
        className="h-full w-full"
      >
        {slideContents.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[16/15] md:aspect-[16/7.5]">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12">
                <div className="text-center text-white max-w-3xl w-full">
                  {/* Brand Name (Always visible) */}
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl mb-6 transition-all duration-1000 ${
                      fadeOut ? 'opacity-100 scale-125 animate-bounce-brand' : 'opacity-100 scale-100'
                    }`}
                  >
                    {slide.brandName}
                  </h2>

                  {/* Main Text Block (Fades out) */}
                  <div
                    className={`transition-all duration-1000 ${
                      activeIndex === index && !fadeOut
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      <span
                        className="block animate-fade-in-up mb-3"
                        style={{ animationDelay: '0.2s' }}
                      >
                        {slide.title}
                      </span>
                      <span
                        className="block text-primary animate-fade-in-up mb-6"
                        style={{ animationDelay: '0.4s' }}
                      >
                        {slide.subtitle}
                      </span>
                    </h1>
                    <p
                      className="text-base sm:text-lg md:text-xl mb-10 animate-fade-in-up"
                      style={{ animationDelay: '0.6s' }}
                    >
                      {slide.description}
                    </p>
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                      >
                        <Link href={slide.buttonLink}>
                          {slide.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5 inline-block" />
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

      {/* Navigation Arrows */}
      <button
        id="swiper-prev"
        className="absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        id="swiper-next"
        className="absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 1rem !important;
        }
        .swiper-pagination-bullet {
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
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

        @keyframes bounce-brand {
          0%, 100% {
            transform: scale(1.25);
          }
          50% {
            transform: scale(1.35);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-brand {
          animation: bounce-brand 1s ease-in-out forwards;
        }

        .font-seasons {
          font-family: 'The Seasons', serif;
        }
      `}</style>
    </div>
  );
}
