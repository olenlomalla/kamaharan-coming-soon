import { FC } from "react";

import Header from "../components/brothersumrah/Header";

const BrothersUmrah: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main content with proper spacing for fixed header */}
      <main className="container mx-auto flex-grow p-4 pt-24">
        {/* Hero section with ID for navigation */}
        <section id="top" className="mb-12 py-8">
          <h2 className="mb-4 text-3xl font-bold text-umrah-darkPurple">
            Welcome to Brothers Umrah 2025/26
          </h2>
          <p className="text-lg">
            Join us on a spiritually enriching journey to the holy sites.
          </p>
        </section>

        {/* Experience section */}
        <section id="experience" className="mb-12 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-umrah-darkPurple">
            The Experience
          </h2>
          <p>
            This is where you can describe the spiritual experience of Umrah.
          </p>
        </section>

        {/* Journey Itinerary section */}
        <section id="journey-itinerary" className="mb-12 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-umrah-darkPurple">
            Journey Itinerary
          </h2>
          <p>Details about the trip schedule, destinations, and activities.</p>
        </section>

        {/* Benefits section */}
        <section id="benefits" className="mb-12 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-umrah-darkPurple">
            Why This Trip?
          </h2>
          <p>The unique benefits and features of our Umrah package.</p>
        </section>

        {/* Pricing section */}
        <section id="pricing" className="mb-12 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-umrah-darkPurple">
            Pricing & Packages
          </h2>
          <p>Information about different packages and their costs.</p>
        </section>

        {/* Contact section */}
        <section id="contact-section" className="mb-12 py-8">
          <h2 className="mb-4 text-2xl font-semibold text-umrah-darkPurple">
            Contact Us
          </h2>
          <p>Contact form or information would go here.</p>
        </section>
      </main>
    </div>
  );
};

export default BrothersUmrah;
