import { FC } from "react";

import Benefits from "../components/brothersumrah/Benefits";
import DrivingBonus from "../components/brothersumrah/DrivingBonus";
import Experience from "../components/brothersumrah/Experience";
import Header from "../components/brothersumrah/Header";
import Hero from "../components/brothersumrah/Hero";
import Pricing from "../components/brothersumrah/Pricing";

const BrothersUmrah: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero section */}
        <Hero />

        {/* Experience section (includes Journey Itinerary) */}
        <Experience />

        {/* Benefits section */}
        <Benefits />

        {/* DrivingBonus section */}
        <DrivingBonus />

        {/* Pricing section */}
        <Pricing />

        {/* Contact section */}
        <div className="container mx-auto p-4">
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
