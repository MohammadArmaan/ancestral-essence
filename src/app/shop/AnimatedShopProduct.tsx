"use client";

import DiscountBadge from "@/components/DiscountBadge";
import Badge from "@/components/ui/badge";
import WixImage from "@/components/WixImage";
import { formatCurrency } from "@/lib/utils";
import { products } from "@wix/stores";
import Link from "next/link";
import { useState } from "react";

interface AnimatedShopProductProps {
  product: products.Product;
}

// Utility: Clean & truncate HTML description
function getCleanDescription(htmlDescription: string | undefined): string {
  if (!htmlDescription) {
    return "Discover this amazing product with premium quality and exceptional value.";
  }

  const cleanText = htmlDescription.replace(/<[^>]*>/g, "").trim();
  if (cleanText.length <= 100) return cleanText;

  const truncated = cleanText.substring(0, 100);
  const lastSpace = truncated.lastIndexOf(" ");
  return lastSpace > 80 ? truncated.substring(0, lastSpace) + "..." : truncated + "...";
}

export default function AnimatedShopProduct({ product }: AnimatedShopProductProps) {
  const mainImage = product.media?.mainMedia?.image;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/products/${product.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block overflow-hidden rounded-2xl border-2 border-border dark:border-border bg-card dark:bg-card shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Animated borders */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl">
        <span className={`absolute top-0 left-0 h-[2px] bg-primary transition-all duration-200 ${isHovered ? "w-full" : "w-0"}`} />
        <span className={`absolute top-0 right-0 w-[2px] bg-primary transition-all duration-200 delay-200 ${isHovered ? "h-full" : "h-0"}`} />
        <span className={`absolute bottom-0 right-0 h-[2px] bg-primary transition-all duration-200 delay-400 ${isHovered ? "w-full" : "w-0"}`} />
        <span className={`absolute bottom-0 left-0 w-[2px] bg-primary transition-all duration-200 delay-600 ${isHovered ? "h-full" : "h-0"}`} />
      </div>

      {/* Image container */}
      <div className={`relative aspect-square z-0 rounded-2xl overflow-hidden bg-background transition-all duration-300 ${isHovered ? "bg-primary/30" : ""}`}>
        <WixImage
          mediaIdentifier={mainImage?.url}
          alt={mainImage?.altText || product.name}
          width={700}
          height={700}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />

        {/* Hover overlay with description */}
        <div className={`absolute inset-0 flex items-center justify-center p-6 z-20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <div className="text-center text-primary-foreground bg-background/10 backdrop-blur-md rounded-lg p-4 max-w-[90%]">
            <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
            <p className="text-sm leading-relaxed">
              {getCleanDescription(product?.description ?? undefined)}
            </p>
          </div>
        </div>

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-30">
          {product.ribbon && <Badge>{product.ribbon}</Badge>}
          {product.discount && <DiscountBadge data={product.discount} />}
        </div>

        {/* Bottom Right Price */}
        <div className="absolute bottom-3 right-3 z-30">
          <Badge className="bg-background/90 text-foreground border border-border backdrop-blur-sm font-semibold">
            {getFormattedPrice(product)}
          </Badge>
        </div>
      </div>

      {/* Product Title */}
      <div className="p-4 text-center z-20 relative">
        <h3 className={`text-lg font-bold transition-colors duration-300 ${isHovered ? "text-primary" : "text-foreground"}`}>
          {product.name}
        </h3>
      </div>
    </Link>
  );
}

function getFormattedPrice(product: products.Product) {
  const minPrice = product.priceRange?.minValue;
  const maxPrice = product.priceRange?.maxValue;

  if (minPrice && maxPrice && minPrice !== maxPrice) {
    return `from ${formatCurrency(minPrice, product.priceData?.currency)}`;
  } else {
    return (
      product.priceData?.formatted?.discountedPrice ||
      product.priceData?.formatted?.price ||
      "n/a"
    );
  }
}
