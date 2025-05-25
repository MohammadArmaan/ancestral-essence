import { Star } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
      {
        name: "Sarah Johnson",
        location: "New York, NY",
        text: "My Golden Retriever Max has never been healthier! His coat is shinier and he has so much more energy since switching to Ancestral Essence.",
        rating: 5,
        petName: "Max",
      },
      {
        name: "Mike Chen",
        location: "Los Angeles, CA",
        text: "Finally found a food that doesn't upset my cat Luna's sensitive stomach. She actually gets excited at meal time now!",
        rating: 5,
        petName: "Luna",
      },
      {
        name: "Emily Rodriguez",
        location: "Austin, TX",
        text: "The quality is exceptional and the customer service is amazing. My rescue dog Charlie is thriving on this food!",
        rating: 5,
        petName: "Charlie",
      },
    ];
  
    return (
      <div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            What Pet Parents Say
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Read stories from thousands of satisfied customers who've seen amazing
            results with their pets
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 italic text-foreground/80">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
                <div className="text-sm font-medium text-primary">
                  Pet parent to {testimonial.petName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }