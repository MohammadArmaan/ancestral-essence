import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the mission behind Ancestral Essence – premium nutrition for dogs and cats.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <div className="space-y-10 text-center">
        {/* About Us Header */}
        <h1 className="py-5 text-4xl font-bold">ABOUT US</h1>
        <p className="leading-7">
          Welcome to <span className="font-semibold">Ancestral Essence</span> – your trusted destination for high-quality, nutrient-rich food for dogs and cats. Born from a love for animals and a commitment to their well-being, we are here to provide pets with the nourishment they deserve.
        </p>
        <p className="leading-7">
          Our mission is simple: to promote happy, healthy lives for pets through thoughtfully sourced, biologically appropriate meals that mirror their ancestral diets. Whether you’re a first-time pet parent or a seasoned companion, we’re here to help you care better.
        </p>

        {/* Brand Philosophy */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Why Ancestral?</h2>
            <p className="mt-3 leading-6">
              We believe that modern pets thrive on diets inspired by their roots. Our recipes are crafted to resemble the ancestral eating habits of dogs and cats — rich in protein, essential fats, and free from unnecessary fillers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">What We Offer</h2>
            <p className="mt-3 leading-6">
              From grain-free kibble to freeze-dried raw meals and treats, our collection is curated for optimal taste and nutrition. We prioritize clean ingredients, ethical sourcing, and complete transparency.
            </p>
          </div>
        </div>

        {/* Store Details - Optional */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold">JOIN OUR PACK</h2>
          <p className="mt-2">
            We&apos;re more than a store — we&apos;re a community of pet lovers on a mission to nourish with purpose. Follow us for updates, nutrition tips, and special offers.
          </p>
          <p className="mt-2 text-muted-foreground">
            Online-only for now. Shipping across India.
          </p>
        </div>
      </div>
    </main>
  );
}
