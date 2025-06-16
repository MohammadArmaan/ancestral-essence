import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSlider from "@/components/HeroSlider";
import HeroSliderVideo from "@/components/HeroSliderVideo";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ScrollingRibbon from "@/components/ScrollingRibbon";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full">
      {/* Full Width Hero Banner */}
      {/* <div className="relative h-screen w-full"> */}
        <HeroSlider />
      {/* </div> */}

      {/* Rest of the content with max-width */}

      {/* Scrolling Ribbon */}
      <ScrollingRibbon />

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-16">
        {/* Featured Products */}
        <Suspense fallback={<LoadingSkeleton />}>
          <FeaturedProducts />
        </Suspense>

        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        <AboutSection />


        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </main>
  );
}
