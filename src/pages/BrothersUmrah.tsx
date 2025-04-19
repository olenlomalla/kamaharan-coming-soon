import { FC } from "react";

import Header from "../components/brothersumrah/Header";
import Hero from "../components/brothersumrah/Hero";

// Import the Hero component

const BrothersUmrah: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero section */}
        <Hero />

        {/* Content sections with container styles */}
        <div className="container mx-auto p-4">
          {/* Experience section */}
          <section id="experience" className="section-padding">
            <h2 className="heading-md mb-4 text-umrah-darkPurple">
              The Experience
            </h2>
            <p className="text-lg">
              This is where you can describe the spiritual experience of Umrah.
            </p>
          </section>

          {/* Journey Itinerary section */}
          <section id="journey-itinerary" className="section-padding">
            <h2 className="heading-md mb-4 text-umrah-darkPurple">
              Journey Itinerary
            </h2>
            <p className="text-lg">
              Details about the trip schedule, destinations, and activities.
            </p>
          </section>

          {/* Benefits section */}
          <section id="benefits" className="section-padding">
            <h2 className="heading-md mb-4 text-umrah-darkPurple">
              Why This Trip?
            </h2>
            <p className="text-lg">
              The unique benefits and features of our Umrah package.
            </p>
          </section>

          {/* Pricing section */}
          <section id="pricing" className="section-padding">
            <h2 className="heading-md mb-4 text-umrah-darkPurple">
              Pricing & Packages
            </h2>
            <p className="text-lg">
              Information about different packages and their costs.
            </p>
          </section>

          {/* Contact section */}
          <section id="contact-section" className="section-padding">
            <h2 className="heading-md mb-4 text-umrah-darkPurple">
              Contact Us
            </h2>
            <p className="text-lg">
              Contact form or information would go here.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BrothersUmrah;
