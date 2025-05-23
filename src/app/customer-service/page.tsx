import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support",
  description: "Customer support for Ancestral Essence",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="space-y-10 text-center">
        {/* Customer Care Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">CUSTOMER CARE</h2>
          <p>
            At Ancestral Essence, we prioritize your shopping experience by offering dedicated customer support for any inquiries, product guidance, or after-sales assistance.
          </p>
          <p>
            Our customer care team is available to ensure a seamless shopping journey and provide solutions tailored to your needs. For any issues related to orders, deliveries, returns, or refunds, please refer to the FAQ section on our website.
          </p>
        </section>

        {/* Store Location Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">STORE LOCATION</h2>
          <p>Visit us at our store located at:</p>
          <address className="font-semibold not-italic">
            178, 8th Cross Rd, <br />
            Chandra Layout, Laripalya, <br />
            Deepanjali Nagar, <br />
            Bangalore, Karnataka, India
          </address>
        </section>
      </div>
    </main>
  );
}
