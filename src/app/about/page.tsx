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

        {/* Brand Story */}
        <div className="mt-16 rounded-lg bg-gray-100 p-8 text-left shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-center text-3xl font-bold text-primary">Our Brand Story</h2>
          <p className="mb-4 leading-7">
            Meet <span className="font-semibold">Ancestral Essence</span>, born from our passion to revolutionize pet health. We believe every pet deserves vibrant wellness. Our expertly crafted gourmet dining experience optimizes overall health, addressing common issues like digestive problems and allergies.
          </p>
          <p className="mb-4 leading-7">
            Don’t wait – <span className="font-semibold text-primary">join the pack today</span> and give your pet the gift of thriving health and wellness.
          </p>
          <p className="leading-7">
            At <span className="font-semibold">Ancestral Essence</span>, we believe in nourishing vibrant pet health. Our gourmet meals and functional supplements are crafted with exceptional quality and tailored to your pet’s unique needs. From picky eaters to sensitive tummies, our vet-formulated recipes use high-quality, species-appropriate ingredients for optimal gut health and palatability.
          </p>
          <p className="mt-4 leading-7">
            <span className="italic">Witness the difference:</span> over <span className="font-bold">80% of pets</span> show improved energy, digestion, and coat within a month. Give your pet the best with <span className="font-semibold">Ancestral Essence</span>.
          </p>
        </div>

        {/* Store Details */}
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
