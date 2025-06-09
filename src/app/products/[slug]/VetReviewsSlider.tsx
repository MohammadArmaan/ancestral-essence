"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. Meera Iyer",
    location: "Bangalore, India",
    petName: "Buddy",
    rating: 5,
    text: "Ancestral Essence has transformed my clients' pets. The holistic ingredients support digestion and vitality like no other brand.",
  },
  {
    name: "Dr. Arjun Rao",
    location: "Mumbai, India",
    petName: "Max",
    rating: 4,
    text: "I've personally seen reduced inflammation and better energy levels in dogs fed with Ancestral Essence. Highly recommended.",
  },
  {
    name: "Dr. Shalini Menon",
    location: "Chennai, India",
    petName: "Luna",
    rating: 5,
    text: "It's rare to find such clean formulations. Ancestral Essence is my top suggestion for pet owners looking for premium nutrition.",
  },
  {
    name: "Dr. Rishi Patel",
    location: "Pune, India",
    petName: "Simba",
    rating: 5,
    text: "Excellent results in coat quality and digestion. Ancestral Essence is now a staple recommendation in my clinic.",
  },
  {
    name: "Dr. Nisha Kapoor",
    location: "Delhi, India",
    petName: "Bella",
    rating: 5,
    text: "After switching to Ancestral Essence, pets show improved activity and reduced allergies. I stand by this brand.",
  },
  {
    name: "Dr. Vikram Shah",
    location: "Hyderabad, India",
    petName: "Rocky",
    rating: 4,
    text: "The ingredient quality is unmatched. I appreciate the transparency and effectiveness Ancestral Essence brings.",
  },
];

export default function VetReviewsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  // Make sure Swiper only renders when refs are mounted
  useEffect(() => {
    setIsSwiperReady(true);
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          What Vets Are Saying
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Trusted by veterinary professionals across India for their holistic
          approach to pet health and wellness.
        </p>
      </div>

      {/* Custom Navigation Arrows */}
      <div className="pointer-events-none absolute inset-y-0 z-10 top-[60%] w-full items-center justify-between">
        <button
          ref={prevRef}
          className="pointer-events-auto absolute left-0 rounded-full border border-primary bg-background p-2 text-primary shadow hover:bg-primary hover:text-white transition"
        >
          <ChevronLeft />
        </button>
        <button
          ref={nextRef}
          className="pointer-events-auto absolute right-6 rounded-full border border-primary bg-background p-2 text-primary shadow hover:bg-primary hover:text-white transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Swiper Carousel */}
      {isSwiperReady && (
        <Swiper
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <ReviewCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

function ReviewCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <Card className="m-5 p-5 shadow-xl">
      <div className="mb-4 flex space-x-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="mb-4 italic text-foreground/80">"{testimonial.text}"</p>
      <div className="border-t pt-4">
        <div className="font-semibold text-foreground">{testimonial.name}</div>
        <div className="text-sm text-muted-foreground">
          {testimonial.location}
        </div>
        <div className="text-sm font-medium text-primary">
          Vet of {testimonial.petName}
        </div>
      </div>
    </Card>
  );
}
