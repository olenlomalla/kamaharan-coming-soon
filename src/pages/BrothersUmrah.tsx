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
    <div className="flex min-h-screen flex-col font-display">
      {/* Header component (navigation) */}
      <Header />

      {/* Hero component (main banner) */}
      <Hero />

      {/* Experience component (includes the itinerary) */}
      <Experience />

      {/* Benefits section */}
      <Benefits />

      {/* Driving Bonus section (Projects info) */}
      <DrivingBonus />

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Pricing section */}
      <Pricing />

      {/* FAQ section */}
      <FAQ />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrothersUmrah;
