// "use client";

// import AddToCartButton from "@/components/AddToCartButton";
// import BackInStockNotificationButton from "@/components/BackInStockNotificationButton";
// import BuyNowButton from "@/components/BuyNowButton";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Badge from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { checkInStock, findVariant } from "@/lib/utils";
// import { products } from "@wix/stores";
// import { InfoIcon } from "lucide-react";
// import { useState } from "react";
// import ProductMedia from "./ProductMedia";
// import ProductOptions from "./ProductOptions";
// import ProductPrice from "./ProductPrice";

// interface ProductDetailsProps {
//   product: products.Product;
// }

// export default function ProductDetails({ product }: ProductDetailsProps) {
//   const [quantity, setQuantity] = useState(1);

//   const [selectedOptions, setSelectedOptions] = useState<
//     Record<string, string>
//   >(
//     product.productOptions
//       ?.map((option) => ({
//         [option.name || ""]: option.choices?.[0].description || "",
//       }))
//       ?.reduce((acc, curr) => ({ ...acc, ...curr }), {}) || {},
//   );

//   const selectedVariant = findVariant(product, selectedOptions);

//   const inStock = checkInStock(product, selectedOptions);

//   const availableQuantity =
//     selectedVariant?.stock?.quantity ?? product.stock?.quantity;

//   const availableQuantityExceeded =
//     !!availableQuantity && quantity > availableQuantity;

//   const selectedOptionsMedia = product.productOptions?.flatMap((option) => {
//     const selectedChoice = option.choices?.find(
//       (choice) => choice.description === selectedOptions[option.name || ""],
//     );
//     return selectedChoice?.media?.items ?? [];
//   });

//   return (
//     <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
//       <ProductMedia
//         media={
//           !!selectedOptionsMedia?.length
//             ? selectedOptionsMedia
//             : product.media?.items
//         }
//       />
//       <div className="basis-3/5 space-y-5">
//         <div className="space-y-2.5">
//           <h1 className="text-3xl font-bold lg:text-4xl">{product.name}</h1>
//           {product.brand && (
//             <div className="text-muted-foreground">{product.brand}</div>
//           )}
//           {product.ribbon && <Badge className="block">{product.ribbon}</Badge>}
//         </div>
//         {product.description && (
//           <div
//             dangerouslySetInnerHTML={{ __html: product.description }}
//             className="prose dark:prose-invert"
//           />
//         )}
//         <ProductPrice product={product} selectedVariant={selectedVariant} />
//         <ProductOptions
//           product={product}
//           selectedOptions={selectedOptions}
//           setSelectedOptions={setSelectedOptions}
//         />
//         <div className="space-y-1.5">
//           <Label htmlFor="quantity">Quantity</Label>
//           <div className="flex items-center gap-2.5">
//             <Input
//               name="quantity"
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               className="w-24"
//               disabled={!inStock}
//             />
//             {!!availableQuantity &&
//               (availableQuantityExceeded || availableQuantity < 10) && (
//                 <span className="text-destructive">
//                   Only {availableQuantity} left in stock
//                 </span>
//               )}
//           </div>
//         </div>
//         {inStock ? (
//           <div className="flex items-center gap-2.5">
//             <AddToCartButton
//               product={product}
//               selectedOptions={selectedOptions}
//               quantity={quantity}
//               disabled={availableQuantityExceeded || quantity < 1}
//               className="w-full"
//             />
//             <BuyNowButton
//               product={product}
//               selectedOptions={selectedOptions}
//               quantity={quantity}
//               disabled={availableQuantityExceeded || quantity < 1}
//             />
//           </div>
//         ) : (
//           <BackInStockNotificationButton
//             product={product}
//             selectedOptions={selectedOptions}
//             className="w-full"
//           />
//         )}
//         {!!product.additionalInfoSections?.length && (
//           <div className="space-y-1.5 text-sm text-muted-foreground">
//             <span className="flex items-center gap-2">
//               <InfoIcon className="size-5" />
//               <span>Additional product information</span>
//             </span>
//             <Accordion type="multiple">
//               {product.additionalInfoSections.map((section) => (
//                 <AccordionItem value={section.title || ""} key={section.title}>
//                   <AccordionTrigger>{section.title}</AccordionTrigger>
//                   <AccordionContent>
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: section.description || "",
//                       }}
//                       className="prose text-sm text-muted-foreground dark:prose-invert"
//                     />
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import AddToCartButton from "@/components/AddToCartButton";
import BackInStockNotificationButton from "@/components/BackInStockNotificationButton";
import BuyNowButton from "@/components/BuyNowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Badge from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheckIcon, TruckIcon, RefreshCwIcon } from "lucide-react";
import { checkInStock, findVariant } from "@/lib/utils";
import { products } from "@wix/stores";
import { useState } from "react";
import ProductMedia from "./ProductMedia";
import ProductOptions from "./ProductOptions";
import ProductPrice from "./ProductPrice";

interface ProductDetailsProps {
  product: products.Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(
    product.productOptions
      ?.map((option) => ({
        [option.name || ""]: option.choices?.[0].description || "",
      }))
      ?.reduce((acc, curr) => ({ ...acc, ...curr }), {}) || {},
  );

  const selectedVariant = findVariant(product, selectedOptions);
  const inStock = checkInStock(product, selectedOptions);
  const availableQuantity =
    selectedVariant?.stock?.quantity ?? product.stock?.quantity;
  const availableQuantityExceeded =
    !!availableQuantity && quantity > availableQuantity;

  const selectedOptionsMedia = product.productOptions?.flatMap((option) => {
    const selectedChoice = option.choices?.find(
      (choice) => choice.description === selectedOptions[option.name || ""],
    );
    return selectedChoice?.media?.items ?? [];
  });

  return (
    <div className="flex flex-col gap-12 bg-background px-4 py-10 md:flex-row md:px-6 lg:gap-20 lg:px-12">
      <ProductMedia
        media={
          !!selectedOptionsMedia?.length
            ? selectedOptionsMedia
            : product.media?.items
        }
      />

      <div className="flex basis-3/5 flex-col justify-between space-y-10">
        <div className="space-y-8">
          {/* Heading and Ribbon */}
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
              {product.name}
            </h1>
            {product.brand && (
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                {product.brand}
              </div>
            )}
            {product.ribbon && (
              <Badge className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white shadow-md">
                {product.ribbon}
              </Badge>
            )}
          </div>

          {/* Price */}
          <ProductPrice product={product} selectedVariant={selectedVariant} />

          {/* Options */}
          <ProductOptions
            product={product}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />

          {/* Quantity */}
          <Card className="w-1/2 border-primary rounded-3xl bg-muted/20">
            <CardContent className="p-6">
              <div className="space-y-2">
                <Label htmlFor="quantity" className="text-base font-medium">
                  Quantity
                </Label>
                <div className="flex items-center gap-3">
                  <Input
                    name="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full rounded-lg border-input focus:ring-2 focus:ring-ring"
                    disabled={!inStock}
                  />
                  {!!availableQuantity &&
                    (availableQuantityExceeded || availableQuantity < 10) && (
                      <span className="whitespace-nowrap text-sm font-medium text-destructive">
                        Only {availableQuantity} left in stock
                      </span>
                    )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Buttons */}
          {inStock ? (
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              <AddToCartButton
                product={product}
                selectedOptions={selectedOptions}
                quantity={quantity}
                disabled={availableQuantityExceeded || quantity < 1}
                className="w-full"
              />
              <BuyNowButton
                product={product}
                selectedOptions={selectedOptions}
                quantity={quantity}
                disabled={availableQuantityExceeded || quantity < 1}
                className="w-full"
              />
            </div>
          ) : (
            <BackInStockNotificationButton
              product={product}
              selectedOptions={selectedOptions}
              className="w-full"
            />
          )}
        </div>

        {/* Trust Signals */}
        <Card className="border-0 bg-gradient-to-r from-muted/30 to-muted/20">
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-2">
                  <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">SSL Encrypted</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500/10 p-2">
                  <TruckIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders ₹1000+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-500/10 p-2">
                  <RefreshCwIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30 day policy</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
