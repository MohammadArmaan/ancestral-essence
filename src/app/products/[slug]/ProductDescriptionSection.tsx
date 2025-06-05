import { products } from "@wix/stores";

interface ProductDescriptionSectionProps {
  product: products.Product;
}

export default function ProductDescriptionSection({
  product,
}: ProductDescriptionSectionProps) {
  const mainImage = product.media?.mainMedia?.image?.url;

  return (
    <section className="rounded-xl bg-primary/10 p-6 sm:p-10 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
        About This Product
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Description */}
        <div
          className="prose dark:prose-invert md:w-1/2"
          dangerouslySetInnerHTML={{
            __html: product.description ?? "",
          }}
        />

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={
              mainImage ??
              "https://via.placeholder.com/500x400?text=No+Image"
            }
            alt={product.name ?? "Product image"}
            className="w-full rounded-lg object-cover max-h-auto"
          />
        </div>
      </div>
    </section>
  );
}
