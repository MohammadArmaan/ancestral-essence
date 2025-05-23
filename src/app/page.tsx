import banner from "@/assets/banner.jpg";
import HeroSlider from "@/components/HeroSlider";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <div className="relative flex items-center bg-secondary md:h-96">
        <div className="z-10 space-y-7 p-10 text-center md:w-1/2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Nourish Your Pet with Love
          </h1>
          <p>
          Give your pet the best with our premium food and treats for happy tails.
          </p>

          <Button asChild>
            <Link href="/shop">
              Shop Now <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>

        {/* Arrow Buttons */}
        <button
          id="swiper-prev"
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-primary p-2 text-white hover:bg-primary/80 md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          id="swiper-next"
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-primary p-2 text-white hover:bg-primary/80 md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="relative hidden h-full w-1/2 md:block">
          <HeroSlider />
        </div>
      </div>
      <Suspense fallback={<LoadingSkeleton />}>
        <FeaturedProducts />
      </Suspense>
    </main>
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
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full" />
      ))}
    </div>
  );
}
