import React from "react";

import Footer from "../components/brothersumrah/Footer";
import Header from "../components/brothersumrah/Header";

const BrothersUmrah = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Main content sections */}
      <main className="container mx-auto px-4 pb-12 pt-24">
        {/* Experience Section */}
        <section id="experience" className="mb-16 py-8">
          <h2 className="text-umrah-darkPurple mb-4 text-3xl font-bold">
            The Experience
          </h2>
          <p className="text-lg">
            Experience section content will go here. We'll add more details
            about the Brothers Umrah trip.
          </p>
        </section>

        {/* Journey Itinerary Section */}
        <section id="journey-itinerary" className="mb-16 py-8">
          <h2 className="text-umrah-darkPurple mb-4 text-3xl font-bold">
            Journey Itinerary
          </h2>
          <p className="text-lg">
            Journey itinerary details will be added here.
          </p>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-16 py-8">
          <h2 className="text-umrah-darkPurple mb-4 text-3xl font-bold">
            Why This Trip?
          </h2>
          <p className="text-lg">
            Benefits and reasons to join this unique trip will be listed here.
          </p>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16 py-8">
          <h2 className="text-umrah-darkPurple mb-4 text-3xl font-bold">
            Pricing & Packages
          </h2>
          <p className="text-lg">
            Pricing information and available packages will be displayed here.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-8">
          <h2 className="text-umrah-darkPurple mb-4 text-3xl font-bold">
            Contact Us
          </h2>
          <p className="mb-6 text-lg">
            Have questions about the Brothers Umrah trip? Get in touch with us.
          </p>
          <div className="rounded-lg bg-gray-100 p-6">
            <p className="font-semibold">Phone: 0203 4888 903</p>
            <p className="font-semibold">Email: Support@kamaharan.com</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrothersUmrah;
