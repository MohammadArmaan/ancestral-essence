import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using our services",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center space-y-10">
        {/* Terms & Conditions Header */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">TERMS AND CONDITIONS</h2>
          <p>
            Welcome to Ancestral Essence. By accessing or using our website and services,
            you agree to comply with and be bound by the following terms and conditions.
            Please read them carefully before placing an order.
          </p>
          <p>
            We reserve the right to update or modify these terms at any time without
            prior notice. Your continued use of our services after any changes constitutes
            acceptance of the updated terms.
          </p>
        </section>

        {/* Privacy & Safety */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">PRIVACY & SAFETY</h2>
          <p>
            Your privacy and data security are paramount at Ancestral Essence. We
            adhere to strict data protection policies to safeguard your personal information.
          </p>
          <p>
            We collect only essential information required to fulfill orders, process
            payments, and improve our services. For complete details, please review our{" "}
            <Link href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </Link>.
          </p>
        </section>

        {/* Orders & Deliveries */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">ORDERS & DELIVERIES</h2>
          <p>
            All orders are subject to availability and confirmation of the order price.
            Delivery timelines may vary based on your location and shipping conditions.
          </p>
          <p>
            We strive to deliver your orders promptly but are not responsible for delays
            beyond our control.
          </p>
        </section>

        {/* Returns & Refunds */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">RETURNS & REFUNDS</h2>
          <p>
            Returns and refunds are handled in accordance with our return policy. Please
            contact our customer support through the website for any issues with your order.
          </p>
        </section>

        {/* Wholesale Inquiries */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">WHOLESALE INQUIRIES</h2>
          <p>
            We welcome wholesale partnerships. If you are interested in bulk orders or
            special pricing, please reach out to us via the contact form on our website.
          </p>
        </section>

        {/* Payment Methods */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">PAYMENT METHODS</h2>
          <p>We accept a variety of secure payment options, including:</p>
          <ul className="list-disc list-inside text-left max-w-md mx-auto">
            <li>Credit and Debit Cards</li>
            <li>Net Banking</li>
            <li>UPI Payments</li>
            <li>Offline Payments (selected locations only)</li>
          </ul>
          <p>Your payment information is processed securely and confidentially.</p>
        </section>
      </div>
    </main>
  );
}
