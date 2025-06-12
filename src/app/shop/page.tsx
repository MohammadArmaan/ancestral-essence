import PaginationBar from "@/components/PaginationBar";
import Product from "@/components/Product";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { ProductsSort, queryProducts } from "@/wix-api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import AnimatedShopProduct from "./AnimatedShopProduct";

interface PageProps {
  searchParams: {
    q?: string;
    page?: string;
    collection?: string[];
    price_min?: string;
    price_max?: string;
    sort?: string;
  };
}

export function generateMetadata({ searchParams: { q } }: PageProps): Metadata {
  return {
    title: q ? `Results for "${q}"` : "Products",
  };
}

export default async function Page({
  searchParams: {
    q,
    page = "1",
    collection: collectionIds,
    price_min,
    price_max,
    sort,
  },
}: PageProps) {
  const title = q ? `Results for "${q}"` : "Products";

  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl font-bold md:text-4xl">{title}</h1>
      <Suspense fallback={<LoadingSkeleton />} key={`${q}-${page}`}>
        <ProductResults
          q={q}
          page={parseInt(page)}
          collectionIds={collectionIds}
          priceMin={price_min ? parseInt(price_min) : undefined}
          priceMax={price_max ? parseInt(price_max) : undefined}
          sort={sort as ProductsSort}
        />
      </Suspense>
    </div>
  );
}

interface ProductResultsProps {
  q?: string;
  page: number;
  collectionIds?: string[];
  priceMin?: number;
  priceMax?: number;
  sort?: ProductsSort;
}

async function ProductResults({
  q,
  page,
  collectionIds,
  priceMin,
  priceMax,
  sort,
}: ProductResultsProps) {
  const pageSize = 8;

  const products = await queryProducts(getWixServerClient(), {
    q,
    limit: pageSize,
    skip: (page - 1) * pageSize,
    collectionIds,
    priceMin,
    priceMax,
    sort,
  });

  if (page > (products.totalPages || 1)) notFound();

  return (
    <div className="space-y-10 group-has-[[data-pending]]:animate-pulse">
      <p className="text-center text-xl">
        {products.totalCount}{" "}
        {products.totalCount === 1 ? "product" : "products"} found
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
  {products.items.map((product) => (
    <AnimatedShopProduct key={product._id} product={product} />
  ))}
</div>

      <PaginationBar currentPage={page} totalPages={products.totalPages || 1} />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-10">
      <Skeleton className="mx-auto h-9 w-52" />
      <div className="flex grid-cols-2 flex-col gap-5 sm:grid xl:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-[26rem]" />
        ))}
      </div>
    </div>
  );
}




// import PaginationBar from "@/components/PaginationBar";
// import { Skeleton } from "@/components/ui/skeleton";
// import { getWixServerClient } from "@/lib/wix-client.server";
// import { ProductsSort, queryProducts } from "@/wix-api/products";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { Suspense } from "react";
// import dynamic from "next/dynamic";

// // ✅ Lazy load ProductSlider
// const ProductSlider = dynamic(() => import("./ProductSlider"), {
//   ssr: false,
//   loading: () => <LoadingSkeletonSlider />,
// });

// interface PageProps {
//   searchParams: {
//     q?: string;
//     page?: string;
//     collection?: string[];
//     price_min?: string;
//     price_max?: string;
//     sort?: string;
//   };
// }

// export function generateMetadata({ searchParams: { q } }: PageProps): Metadata {
//   return {
//     title: q ? `Results for "${q}"` : "Products",
//   };
// }

// export default async function Page({
//   searchParams: {
//     q,
//     page = "1",
//     collection: collectionIds,
//     price_min,
//     price_max,
//     sort,
//   },
// }: PageProps) {
//   const title = q ? `Results for "${q}"` : "Products";

//   return (
//     <div className="space-y-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto overflow-hidden">
//       <h1 className="text-center text-3xl font-bold md:text-4xl">{title}</h1>
//       <Suspense fallback={<LoadingSkeleton />} key={`${q}-${page}`}>
//         <ProductResults
//           q={q}
//           page={parseInt(page)}
//           collectionIds={collectionIds}
//           priceMin={price_min ? parseInt(price_min) : undefined}
//           priceMax={price_max ? parseInt(price_max) : undefined}
//           sort={sort as ProductsSort}
//         />
//       </Suspense>
//     </div>
//   );
// }

// interface ProductResultsProps {
//   q?: string;
//   page: number;
//   collectionIds?: string[];
//   priceMin?: number;
//   priceMax?: number;
//   sort?: ProductsSort;
// }

// async function ProductResults({
//   q,
//   page,
//   collectionIds,
//   priceMin,
//   priceMax,
//   sort,
// }: ProductResultsProps) {
//   const pageSize = 8;

//   const products = await queryProducts(getWixServerClient(), {
//     q,
//     limit: pageSize,
//     skip: (page - 1) * pageSize,
//     collectionIds,
//     priceMin,
//     priceMax,
//     sort,
//   });

//   if (page > (products.totalPages || 1)) notFound();

//   return (
//     <div className="space-y-10">
//       <p className="text-center text-xl">
//         {products.totalCount} {products.totalCount === 1 ? "product" : "products"} found
//       </p>
//       <div className="overflow-hidden">
//         <ProductSlider products={products.items} />
//       </div>
//       <div className="pt-4">
//         <PaginationBar currentPage={page} totalPages={products.totalPages || 1} />
//       </div>
//     </div>
//   );
// }

// function LoadingSkeleton() {
//   return (
//     <div className="space-y-10">
//       <Skeleton className="mx-auto h-9 w-52" />
//       <LoadingSkeletonSlider />
//     </div>
//   );
// }

// function LoadingSkeletonSlider() {
//   return (
//     <div className="overflow-hidden">
//       <div className="flex gap-4 overflow-x-auto px-4">
//         {Array.from({ length: 4 }).map((_, i) => (
//           <div key={i} className="min-w-[250px] pb-10">
//             <Skeleton className="h-[26rem] w-full" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
