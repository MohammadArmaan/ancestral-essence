import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import FeaturedSectionProduct from "./FeaturedSectionProduct";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function FeaturedProducts() {
    const wixClient = getWixServerClient();
    const collection = await getCollectionBySlug(wixClient, "featured-products");
  
    if (!collection?._id) return null;
  
    const featuredProducts = await queryProducts(wixClient, {
      collectionIds: collection._id,
    });
  
    if (!featuredProducts.items.length) return null;
  
    return (
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Our <span className="text-primary">Bestsellers</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our most popular pet food selections, loved by pets and trusted by their owners worldwide
          </p>
        </div>
  
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.items.slice(0, 4).map((product) => (
            <FeaturedSectionProduct key={product._id} product={product} />
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
      </section>
    );
  }