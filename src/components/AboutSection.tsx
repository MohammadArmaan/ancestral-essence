import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import CatPillImage from "@/assets/cat-pill.png"; // adjust path if needed

export default function AboutSection() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Crafted for Your Pet's{" "}
            <span className="text-primary">Wild Heritage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
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
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/about" passHref legacyBehavior>
            <Button
              asChild
              className="bg-primary px-8 py-3 text-white hover:bg-[oklch(0.606_0.25_292.717)/0.9]"
            >
              <a>Learn More About Us</a>
            </Button>
          </Link>
        </div>

        {/* Replacing pills with an image */}
        <div className="flex justify-center">
          <Image
            src={CatPillImage}
            alt="Cat with supplement"
            width={450}
            height={450}
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
