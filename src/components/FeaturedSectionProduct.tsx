import { formatCurrency } from "@/lib/utils";
import { products } from "@wix/stores";
import Link from "next/link";
import DiscountBadge from "./DiscountBadge";
import WixImage from "./WixImage";
import Badge from "./ui/badge";

interface FeaturedSectionProductProps {
  product: products.Product;
}

export default function FeaturedSectionProduct({ product }: FeaturedSectionProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-card shadow-md"
    >
      {/* Animated border container */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl">
        <span className="animate-border-draw absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-200" />
        <span className="animate-border-draw absolute top-0 right-0 h-0 w-[2px] bg-primary group-hover:h-full delay-200 transition-all duration-200" />
        <span className="animate-border-draw absolute bottom-0 right-0 h-[2px] w-0 bg-primary group-hover:w-full delay-400 transition-all duration-200" />
        <span className="animate-border-draw absolute bottom-0 left-0 h-0 w-[2px] bg-primary group-hover:h-full delay-600 transition-all duration-200" />
      </div>

      <div className="relative aspect-square overflow-hidden bg-white/20 z-0 rounded-2xl">
        <WixImage
          mediaIdentifier={mainImage?.url}
          alt={mainImage?.altText}
          width={700}
          height={700}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
          {product.ribbon && <Badge>{product.ribbon}</Badge>}
          {product.discount && <DiscountBadge data={product.discount} />}
        </div>

        <div className="absolute bottom-3 right-3 z-20">
          <Badge className="bg-secondary font-semibold text-secondary-foreground">
            {getFormattedPrice(product)}
          </Badge>
        </div>
      </div>

      <div className="p-4 text-center z-20 relative">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
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
