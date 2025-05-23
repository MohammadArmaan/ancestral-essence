import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Details",
  description: "Get premium pet food delivered to your door with Ancestral Essence.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="space-y-10 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold">DELIVERY DETAILS</h2>
        <p>
          Ancestral Essence is dedicated to delivering high-quality, nutritious pet food for dogs and cats directly to your doorstep. We offer a fast, convenient, and reliable delivery experience for pet parents across India.
        </p>

        {/* Online Orders */}
        <div className="space-y-4 text-left">
          <h3 className="text-2xl font-semibold">ONLINE ORDERS ONLY</h3>
          <p>
            All purchases are made exclusively through our website. We do not offer physical store pickups at this time.
          </p>
          <p>
            Once your order is placed, it will be processed within <strong>1–2 business days</strong>. You will receive tracking information once your package is shipped.
          </p>
        </div>

        {/* Delivery Timeline */}
        <div className="space-y-4 text-left">
          <h3 className="text-2xl font-semibold">DELIVERY TIMELINE</h3>
          <p>
            Delivery typically takes <strong>3–5 business days</strong>, depending on your location. We partner with trusted courier services to ensure safe and timely arrival of your order.
          </p>
        </div>

        {/* Delivery Locations */}
        <div className="space-y-4 text-left">
          <h3 className="text-2xl font-semibold">DELIVERY LOCATIONS</h3>
          <p>
            We currently deliver across most cities and towns in India. If your location is not serviceable, you’ll be notified at checkout before placing the order.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-4 text-left">
          <h3 className="text-2xl font-semibold">QUESTIONS?</h3>
          <p>
            For common queries, check out our FAQ section on the website. We’re continually working to improve your experience with Ancestral Essence.
          </p>
        </div>
      </div>
    </main>
  );
}
