import React from "react";

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

const BrothersUmrah = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <DrivingBonus />
      <Benefits />
      <VideoShowcase />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default BrothersUmrah;
