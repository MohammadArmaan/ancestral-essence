// import banner from "@/assets/banner.jpg";
// import HeroSlider from "@/components/HeroSlider";
// import Product from "@/components/Product";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { getWixServerClient } from "@/lib/wix-client.server";
// import { getCollectionBySlug } from "@/wix-api/collections";
// import { queryProducts } from "@/wix-api/products";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Suspense } from "react";

// export default function Home() {
//   return (
//     <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
//       <div className="relative flex items-center bg-secondary md:h-96">
//         <div className="z-10 space-y-7 p-10 text-center md:w-1/2">
//           <h1 className="text-3xl font-bold md:text-4xl">
//             Nourish Your Pet with Love
//           </h1>
//           <p>
//           Give your pet the best with our premium food and treats for happy tails.
//           </p>

//           <Button asChild>
//             <Link href="/shop">
//               Shop Now <ArrowRight className="ml-2 size-5" />
//             </Link>
//           </Button>
//         </div>

//         {/* Arrow Buttons */}
//         <button
//           id="swiper-prev"
//           className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-primary p-2 text-white hover:bg-primary/80 md:flex"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <button
//           id="swiper-next"
//           className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-primary p-2 text-white hover:bg-primary/80 md:flex"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>

//         <div className="relative hidden h-full w-1/2 md:block">
//           <HeroSlider />
//         </div>
//       </div>
//       <Suspense fallback={<LoadingSkeleton />}>
//         <FeaturedProducts />
//       </Suspense>
//     </main>
//   );
// }

// async function FeaturedProducts() {
//   const wixClient = getWixServerClient();

//   const collection = await getCollectionBySlug(wixClient, "featured-products");

//   if (!collection?._id) {
//     return null;
//   }

//   const featuredProducts = await queryProducts(wixClient, {
//     collectionIds: collection._id,
//   });

//   if (!featuredProducts.items.length) {
//     return null;
//   }

//   return (
//     <div className="space-y-5">
//       <h2 className="text-2xl font-bold">Featured Products</h2>
//       <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
//         {featuredProducts.items.map((product) => (
//           <Product key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function LoadingSkeleton() {
//   return (
//     <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
//       {Array.from({ length: 8 }).map((_, i) => (
//         <Skeleton key={i} className="h-[26rem] w-full" />
//       ))}
//     </div>
//   );
// }

import HeroSlider from "@/components/HeroSlider";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import {
  ArrowRight,
  Heart,
  Shield,
  Truck,
  Award,
  Star,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full">
      {/* Full Width Hero Banner */}
      <div className="relative h-screen w-full">
        <HeroSlider />
      </div>

      {/* Rest of the content with max-width */}
      <div className="mx-auto max-w-7xl space-y-16 px-5 py-16">
        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        <AboutSection />

        {/* Featured Products */}
        <Suspense fallback={<LoadingSkeleton />}>
          <FeaturedProducts />
        </Suspense>

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

function FeaturesSection() {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Made with Love",
      description:
        "Every recipe is crafted with care using only the finest natural ingredients for your beloved pets.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "100% Natural",
      description:
        "No artificial preservatives, colors, or flavors - just pure, wholesome nutrition your pet deserves.",
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Free Delivery",
      description:
        "Free shipping on orders over $50 - delivered fresh to your doorstep within 2-3 business days.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Award Winning",
      description:
        "Recognized by veterinarians and pet nutrition experts worldwide for exceptional quality.",
    },
  ];

  return (
    <div>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Why Pet Parents Choose Us
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Discover what makes our pet food the preferred choice for thousands of
          happy pets and their families
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 flex transform justify-center transition-transform duration-300 hover:scale-110">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Crafted for Your Pet's{" "}
            <span className="text-primary">Wild Heritage</span>
          </h2>
          <p className="text-lg text-gray-600">
            At Ancestral Essence, we believe every pet deserves nutrition that
            honors their natural instincts. Our recipes are inspired by what
            pets would eat in the wild, using premium ingredients sourced from
            trusted farms and suppliers.
          </p>
          <div className="space-y-3">
            {[
              "Grain-free recipes for sensitive stomachs",
              "High-protein formulas for active pets",
              "Locally sourced, sustainable ingredients",
              "Veterinarian approved and tested",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <Button className="bg-primary px-8 py-3 text-white hover:bg-primary/90">
            Learn More About Us
          </Button>
        </div>
        <div className="relative">
          <div className="rounded-full bg-primary/20 p-8">
            <div className="rounded-full bg-primary/30 p-8">
              <div className="rounded-full bg-primary/40 p-8">
                <Heart className="mx-auto h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function FeaturedProducts() {
  const wixClient = getWixServerClient();

  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  if (!featuredProducts.items.length) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Our <span className="text-primary">Bestsellers</span>
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Discover our most popular pet food selections, loved by pets and
          trusted by their owners worldwide
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.items.slice(0, 4).map((product, index) => (
          <div
            key={product._id}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <Product product={product} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          asChild
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white"
        >
          <Link href="/shop">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function WhyChooseUsSection() {
  return (
    <div className="rounded-2xl bg-gray-900 p-10 text-center text-white">
      <h2 className="mb-6 text-3xl font-bold">
        Trusted by Pet Families Worldwide
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="text-4xl font-bold text-primary">15,000</div>
          <h3 className="text-xl font-semibold">Happy Pets</h3>
          <p className="text-gray-300">Nourished with our premium food daily</p>
        </div>
        <div className="space-y-4">
          <div className="mb-2 flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <h3 className="text-xl font-semibold">5-Star Reviews</h3>
          <p className="text-gray-300">
            Average rating from verified customers
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-4xl font-bold text-primary">25</div>
          <h3 className="text-xl font-semibold">Years Experience</h3>
          <p className="text-gray-300">Decades of expertise in pet nutrition</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      text: "My Golden Retriever Max has never been healthier! His coat is shinier and he has so much more energy since switching to Ancestral Essence.",
      rating: 5,
      petName: "Max",
    },
    {
      name: "Mike Chen",
      location: "Los Angeles, CA",
      text: "Finally found a food that doesn't upset my cat Luna's sensitive stomach. She actually gets excited at meal time now!",
      rating: 5,
      petName: "Luna",
    },
    {
      name: "Emily Rodriguez",
      location: "Austin, TX",
      text: "The quality is exceptional and the customer service is amazing. My rescue dog Charlie is thriving on this food!",
      rating: 5,
      petName: "Charlie",
    },
  ];

  return (
    <div>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          What Pet Parents Say
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Read stories from thousands of satisfied customers who've seen amazing
          results with their pets
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 flex space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="mb-4 italic text-gray-600">"{testimonial.text}"</p>
            <div className="border-t pt-4">
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-500">
                {testimonial.location}
              </div>
              <div className="text-sm font-medium text-primary">
                Pet parent to {testimonial.petName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-10 text-center text-white">
      <Users className="mx-auto mb-6 h-16 w-16" />
      <h2 className="mb-4 text-3xl font-bold">Join Our Pet Family Today</h2>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
        Get exclusive offers, pet care tips, and be the first to know about new
        products. Plus, enjoy 15% off your first order when you subscribe!
      </p>
      <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-white"
        />
        <Button className="bg-white px-8 py-3 text-primary hover:bg-gray-100">
          Subscribe & Save 15%
        </Button>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <Skeleton className="mx-auto h-8 w-64" />
        <Skeleton className="mx-auto h-4 w-96" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-[26rem] w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}
