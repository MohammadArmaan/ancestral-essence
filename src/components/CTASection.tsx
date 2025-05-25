import { Users } from "lucide-react";
import { Button } from "./ui/button";

export default function CTASection() {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-10 text-center text-white">
        <Users className="mx-auto mb-6 h-16 w-16" />
        <h2 className="mb-4 text-3xl font-bold">Join Our Pet Family Today</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
          Get exclusive offers, pet care tips, and be the first to know about new
          products. Plus, enjoy 15% off your first order when you subscribe!
        </p>
        <div className="mx-auto flex items-center max-w-md flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border-0 px-4 py-3 text-foreground focus:ring-2 focus:ring-white"
          />
          <Button className="bg-white px-8 py-3 text-primary hover:bg-gray-100">
            Subscribe & Save 15%
          </Button>
        </div>
      </div>
    );
  }