import { Star } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
          name: "Aarav Sharma",
          location: "Mumbai, Maharashtra",
          text: "My Labrador Bruno has never been healthier! His coat shines and he’s so much more active ever since we started using Ancestral Essence.",
          rating: 5,
          petName: "Bruno",
        },
        {
          name: "Priya Menon",
          location: "Bengaluru, Karnataka",
          text: "Finally found food that suits my cat Snowy's sensitive stomach. She purrs the moment I open the packet!",
          rating: 5,
          petName: "Snowy",
        },
        {
          name: "Rajiv Patel",
          location: "Ahmedabad, Gujarat",
          text: "The quality is top-notch and the customer support is excellent. My indie dog Sheru is loving it and looks healthier than ever!",
          rating: 5,
          petName: "Sheru",
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