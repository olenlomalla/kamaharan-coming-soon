import { FC } from "react";

import Benefits from "../components/brothersumrah/Benefits";
import ContactForm from "../components/brothersumrah/ContactForm";
import DrivingBonus from "../components/brothersumrah/DrivingBonus";
import Experience from "../components/brothersumrah/Experience";
import FAQ from "../components/brothersumrah/FAQ";
import Footer from "../components/brothersumrah/Footer";
import Header from "../components/brothersumrah/Header";
import Hero from "../components/brothersumrah/Hero";
import Pricing from "../components/brothersumrah/Pricing";
import VideoShowcase from "../components/brothersumrah/VideoShowcase";

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

        {/* Video Showcase section */}
        <VideoShowcase />

        {/* Driving Bonus section */}
        <DrivingBonus />

        {/* Pricing section */}
        <Pricing />

        {/* FAQ section */}
        <FAQ />

        {/* Contact section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrothersUmrah;
