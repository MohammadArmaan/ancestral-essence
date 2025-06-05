"use client";

import { products } from "@wix/stores";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info as InfoIcon } from "lucide-react";

interface ProductAdditionalInfoSectionProps {
  product: products.Product;
}

export default function ProductAdditionalInfoSection({
  product,
}: ProductAdditionalInfoSectionProps) {
  const additionalSections = product.additionalInfoSections;

  if (!additionalSections?.length) return null;

  return (
    <section className="rounded-2xl p-6 sm:p-10 shadow-xl dark:bg-black dark:shadow-4xl ring-1 ring-primary/10 backdrop-blur-md space-y-6">
      <div className="flex items-center gap-3 text-primary">
        <InfoIcon className="size-6" />
        <h2 className="text-2xl md:text-3xl font-bold">Additional Information</h2>
      </div>

      <Accordion type="multiple" className="space-y-4">
        {additionalSections.map((section) => (
          <AccordionItem
            key={section.title}
            value={section.title || ""}
            className="rounded-xl border bg-white/40 dark:bg-gray-900/30 backdrop-blur-md shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <AccordionTrigger className="px-4 py-3 text-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary  transition-colors">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="px-5 py-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: section.description || "",
                }}
                className="prose dark:prose-invert text-muted-foreground text-sm max-w-full"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
