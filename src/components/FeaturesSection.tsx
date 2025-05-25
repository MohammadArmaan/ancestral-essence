import { Award, Heart, Shield, Truck } from "lucide-react";

export default function FeaturesSection() {
    const features = [
      {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Made with Love",
        description:
          "Every recipe is crafted with care using only the finest natural ingredients for your beloved pets.",
      },
      {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "100% Natural",
        description:
          "No artificial preservatives, colors, or flavors - just pure, wholesome nutrition your pet deserves.",
      },
      {
        icon: <Truck className="h-8 w-8 text-primary" />,
        title: "Free Delivery",
        description:
          "Free shipping on orders over $50 - delivered fresh to your doorstep within 2-3 business days.",
      },
      {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Award Winning",
        description:
          "Recognized by veterinarians and pet nutrition experts worldwide for exceptional quality.",
      },
    ];
  
    return (
      <div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Why Pet Parents Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover what makes our pet food the preferred choice for thousands of
            happy pets and their families
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex transform justify-center transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }