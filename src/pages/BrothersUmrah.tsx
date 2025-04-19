import { FC } from "react";

import Benefits from "../components/brothersumrah/Benefits";
import ContactForm from "../components/brothersumrah/ContactForm";
import Experience from "../components/brothersumrah/Experience";
import FAQ from "../components/brothersumrah/FAQ";
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

        {/* Pricing section */}
        <Pricing />

        {/* FAQ section */}
        <FAQ />

        {/* Contact section */}
        <ContactForm />
      </main>
    </div>
  );
};

export default BrothersUmrah;
