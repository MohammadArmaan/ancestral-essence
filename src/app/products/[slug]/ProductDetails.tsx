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

// Version - 2
// "use client";

// import AddToCartButton from "@/components/AddToCartButton";
// import BackInStockNotificationButton from "@/components/BackInStockNotificationButton";
// import BuyNowButton from "@/components/BuyNowButton";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Badge from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShieldCheckIcon, TruckIcon, RefreshCwIcon } from "lucide-react";
// import { checkInStock, findVariant } from "@/lib/utils";
// import { products } from "@wix/stores";
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
//     <div className="flex flex-col gap-12 bg-background px-4 py-10 md:flex-row md:px-6 lg:gap-20 lg:px-12">
//       <ProductMedia
//         media={
//           !!selectedOptionsMedia?.length
//             ? selectedOptionsMedia
//             : product.media?.items
//         }
//       />

//       <div className="flex basis-3/5 flex-col justify-between space-y-10">
//         <div className="space-y-8">
//           {/* Heading and Ribbon */}
//           <div className="space-y-3">
//             <h1 className="text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
//               {product.name}
//             </h1>
//             {product.brand && (
//               <div className="text-sm uppercase tracking-wider text-muted-foreground">
//                 {product.brand}
//               </div>
//             )}
//             {product.ribbon && (
//               <Badge className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white shadow-md">
//                 {product.ribbon}
//               </Badge>
//             )}
//           </div>

//           {/* Price */}
//           <ProductPrice product={product} selectedVariant={selectedVariant} />

//           {/* Options */}
//           <ProductOptions
//             product={product}
//             selectedOptions={selectedOptions}
//             setSelectedOptions={setSelectedOptions}
//           />

//           {/* Quantity */}
//           <Card className="w-1/2 border-primary rounded-3xl bg-muted/20">
//             <CardContent className="p-6">
//               <div className="space-y-2">
//                 <Label htmlFor="quantity" className="text-base font-medium">
//                   Quantity
//                 </Label>
//                 <div className="flex items-center gap-3">
//                   <Input
//                     name="quantity"
//                     type="number"
//                     value={quantity}
//                     onChange={(e) => setQuantity(Number(e.target.value))}
//                     className="w-full rounded-lg border-input focus:ring-2 focus:ring-ring"
//                     disabled={!inStock}
//                   />
//                   {!!availableQuantity &&
//                     (availableQuantityExceeded || availableQuantity < 10) && (
//                       <span className="whitespace-nowrap text-sm font-medium text-destructive">
//                         Only {availableQuantity} left in stock
//                       </span>
//                     )}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Buttons */}
//           {inStock ? (
//             <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
//               <AddToCartButton
//                 product={product}
//                 selectedOptions={selectedOptions}
//                 quantity={quantity}
//                 disabled={availableQuantityExceeded || quantity < 1}
//                 className="w-full"
//               />
//               <BuyNowButton
//                 product={product}
//                 selectedOptions={selectedOptions}
//                 quantity={quantity}
//                 disabled={availableQuantityExceeded || quantity < 1}
//                 className="w-full"
//               />
//             </div>
//           ) : (
//             <BackInStockNotificationButton
//               product={product}
//               selectedOptions={selectedOptions}
//               className="w-full"
//             />
//           )}
//         </div>

//         {/* Trust Signals */}
//         <Card className="border-0 bg-gradient-to-r from-muted/30 to-muted/20">
//           <CardContent className="p-6">
//             <div className="grid gap-4 sm:grid-cols-3">
//               <div className="flex items-center gap-3">
//                 <div className="rounded-full bg-green-500/10 p-2">
//                   <ShieldCheckIcon className="h-5 w-5 text-green-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold">Secure Payment</p>
//                   <p className="text-xs text-muted-foreground">SSL Encrypted</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="rounded-full bg-blue-500/10 p-2">
//                   <TruckIcon className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold">Free Shipping</p>
//                   <p className="text-xs text-muted-foreground">Orders ₹1000+</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="rounded-full bg-purple-500/10 p-2">
//                   <RefreshCwIcon className="h-5 w-5 text-purple-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold">Easy Returns</p>
//                   <p className="text-xs text-muted-foreground">30 day policy</p>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
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
import {
  ShieldCheckIcon,
  TruckIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  StarIcon,
} from "lucide-react";
import { checkInStock, findVariant } from "@/lib/utils";
import { products } from "@wix/stores";
import { useState } from "react";
import ProductMedia from "./ProductMedia";
import ProductOptions from "./ProductOptions";
import ProductPrice from "./ProductPrice";
import { Card } from "@/components/ui/card";
import Zoom from "react-medium-image-zoom";

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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-16">
          {/* LEFT SIDE - Media and Product Gallery */}
          <div className="space-y-8">
            {/* Main Product Media */}
            <div className="overflow-hidden p-5 rounded-lg">
              <ProductMedia
                media={
                  !!selectedOptionsMedia?.length
                    ? selectedOptionsMedia
                    : product.media?.items
                }
              />
            </div>

            <div className="grid p-5 grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center hover:scale-105">
                <CheckCircleIcon className="mb-2 h-6 w-6 text-green-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Vet Approved
                </span>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-105">
                <ShieldCheckIcon className="mb-2 h-6 w-6 text-blue-600 " />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Safe Quality
                </span>
              </div>
              <div className="flex flex-col items-center text-center hover:scale-105">
                <StarIcon className="mb-2 h-6 w-6 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Trusted
                </span>
              </div>
            </div>

            {/* Product Gallery */}
            {product.media?.items && product.media.items.length > 1 && (
              <div className="space-y-4">
                {/* <h3 className="text-lg font-semibold text-foreground">
                  Product Gallery
                </h3> */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {product.media.items.slice(0, 6).map((image, idx) => (
                    <Zoom key={image?.image?.url}>
                    <div
                      key={idx}
                      className="aspect-square overflow-hidden rounded-lg bg-gray-50 transition-shadow shadow-xl hover:shadow-2xl dark:bg-slate-800"
                    >

                      <img
                        src={image?.image?.url}
                        alt={
                          image?.image?.altText || `Product image ${idx + 1}`
                        }
                        className="h-full w-full object-cover"
                        />
                    </div>
                        </Zoom>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Signals */}

          </div>

          {/* RIGHT SIDE - Product Details */}
          <div className="space-y-8">
            {/* Product Header */}
            <div className="space-y-4">
              {product.brand && (
                <div className="inline-block">
                  <span className="text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    {product.brand}
                  </span>
                </div>
              )}
              <h1 className="text-3xl font-bold w-full leading-tight text-gray-900 dark:text-white sm:text-6xl">
                {product.name}
              </h1>
              {product.ribbon && (
                <Badge className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 text-sm font-medium text-white">
                  {product.ribbon}
                </Badge>
              )}
            </div>

            {/* Price */}
            <div className="border-b border-gray-200 py-1 dark:border-gray-700">
              <ProductPrice
                product={product}
                selectedVariant={selectedVariant}
              />
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              <ProductOptions
                product={product}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
            </div>

            {/* Quantity Selection */}
            <div className="space-y-4">
              <Label
                htmlFor="quantity"
                className="text-base font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </Label>
              <div className="flex items-center gap-4">
                <div className="w-24">
                  <Input
                    name="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full text-center font-medium"
                    disabled={!inStock}
                    min="1"
                  />
                </div>
                {!!availableQuantity &&
                  (availableQuantityExceeded || availableQuantity < 10) && (
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">
                      Only {availableQuantity} left in stock
                    </span>
                  )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              {inStock ? (
                <div className="space-y-3">
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
                  className="h-12 w-full text-base font-semibold"
                />
              )}
            </div>

            {/* Trust Signals */}
            <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
              <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                Why Shop With Us
              </h3>
              <div className="grid p-5 gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center text-center transition-all hover:scale-105">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20">
                    <ShieldCheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                    Secure Payment
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    SSL Encrypted Checkout
                  </p>
                </div>
                <div className="flex flex-col items-center text-center transition-all hover:scale-105">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
                    <TruckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                    Free Shipping
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    On orders above ₹1000
                  </p>
                </div>
                <div className="flex flex-col items-center text-center transition-all hover:scale-105">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/20">
                    <RefreshCwIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                    Easy Returns
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    30 day return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
