import { Star } from "lucide-react";

export default function WhyChooseUsSection() {
    return (
      <div className="rounded-2xl bg-gray-900 p-10 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">
          Trusted by Pet Families Worldwide
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="text-4xl font-bold text-primary">1,000</div>
            <h3 className="text-xl font-semibold">Happy Pets</h3>
            <p className="text-gray-300">Nourished with our premium food daily</p>
          </div>
          <div className="space-y-4">
            <div className="mb-2 flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <h3 className="text-xl font-semibold">5-Star Reviews</h3>
            <p className="text-gray-300">
              Average rating from verified customers
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-primary">5</div>
            <h3 className="text-xl font-semibold">Years Experience</h3>
            <p className="text-gray-300">Years of expertise in pet nutrition</p>
          </div>
        </div>
      </div>
    );
  }