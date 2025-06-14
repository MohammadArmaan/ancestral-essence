"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Banner from "@/assets/shop-banner.png"

const ShopBanner = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative w-full h-[750px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/80">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/banner.mp4" type="video/mp4" />
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-amber-900/40" />
      </video>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Curved Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg
          className="w-full h-full fill-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-8 md:px-16 lg:px-24">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-none">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="block text-primary animate-fade-in-up">ANCESTRAL</span>
            <span className="block animate-fade-in-up animation-delay-200">ESSENCE</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-2 animate-fade-in-up animation-delay-400">
            Turn back to nature
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-8 animate-fade-in-up animation-delay-600">
            Premium natural pet food crafted with ancestral wisdom
          </p>
          
          {/* Shop Now Button */}
          <Button 
            onClick={scrollToProducts}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-800"
          >
            Shop Now
          </Button>
        </div>
        
        {/* Right Content - Animated Image */}
        <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-none">
          <div className="relative">
            {/* Main Image with Animation */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 animate-float">
              <Image
                src={Banner}
                alt="Ancestral Essence Pet Food"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* Floating Elements Animation */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce" />
            <div className="absolute -top-8 right-8 w-6 h-6 bg-amber-500/30 rounded-full animate-bounce animation-delay-300" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-green-500/20 rounded-full animate-bounce animation-delay-500" />
            <div className="absolute bottom-8 -left-8 w-4 h-4 bg-orange-500/30 rounded-full animate-bounce animation-delay-700" />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Floating Natural Elements */}
      <div className="absolute top-20 left-1/4 w-3 h-3 bg-green-500/40 rounded-full animate-float animation-delay-1000" />
      <div className="absolute top-32 right-1/3 w-4 h-4 bg-amber-500/40 rounded-full animate-float animation-delay-1200" />
      <div className="absolute bottom-32 left-1/6 w-2 h-2 bg-orange-500/50 rounded-full animate-float animation-delay-1400" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500/30 rounded-full animate-float animation-delay-1600" />
    </div>
  );
};

export default ShopBanner;