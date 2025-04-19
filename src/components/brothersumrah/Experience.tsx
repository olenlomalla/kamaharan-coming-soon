import React from "react";

import { Calendar, Compass, MapPin, Users } from "lucide-react";

// Simplified card component without external dependencies
const ExperienceCard = ({ icon: Icon, title, description }) => (
  <div className="hover:border-umrah-purple rounded-lg border border-transparent bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="bg-umrah-purple/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full p-3">
      <Icon size={24} className="text-umrah-purple" />
    </div>
    <h3 className="heading-sm mb-3 text-center">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

// Timeline item component
const TimelineItem = ({ day, title, description }) => (
  <div className="border-umrah-purple/30 relative border-l-2 pb-8 pl-8 last:border-0">
    <div className="bg-umrah-purple absolute left-[-8px] top-0 h-4 w-4 rounded-full"></div>
    <div className="mb-2">
      <span className="text-umrah-gold text-sm font-semibold">{day}</span>
      <h4 className="heading-sm">{title}</h4>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-umrah-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="heading-lg text-umrah-darkPurple mb-6">
            The Experience
          </h2>
          <p className="text-gray-600">
            Embark on a life changing journey. This is more than just an Umrah
            trip, it's a powerful opportunity to strengthen your Deen, build
            meaningful brotherhoods, and invest in your personal and
            professional growth.
            <br />
            <br />
            From eye-opening experiences in Makkah and Madinah to empowering
            opportunities in the UK and abroad including career support and job
            placement through Kamaharan. This journey is designed to inspire
            transformation, create lasting memories, and open new paths forward
            for both your Deen and personal goals.
            <br />
            <br />
            But it doesn't end there. Kamaharan, in partnership with a UK Travel
            Agency, brings you an opportunity to explore Saudi Arabia like never
            before, through days filled with discovery, adventure, and
            late-night conversations.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ExperienceCard
            icon={Calendar}
            title="Sacred Moments"
            description="Experience the profound tranquillity of Madinah and the Prophet's Masjid and completing Umrah in Makkah."
          />
          <ExperienceCard
            icon={Compass}
            title="Adventures"
            description="From horse riding to scuba diving in the Red Sea, and from camel rides to stargazing in the desert."
          />
          <ExperienceCard
            icon={MapPin}
            title="Marvels of Madinah, Makkah and Jeddah"
            description="Discover the cultural richness and modern marvels of the holy cities and beyond."
          />
          <ExperienceCard
            icon={Users}
            title="Connection & Networking"
            description="Build lasting connections with brothers who share your values and ambitions and be ready to work on exciting new projects when you return to the UK."
          />
        </div>

        <div
          id="journey-itinerary"
          className="rounded-xl bg-white p-8 shadow-lg md:p-10"
        >
          <h3 className="heading-md text-umrah-purple mb-8 text-center">
            Journey Itinerary
          </h3>

          <div className="mx-auto max-w-3xl">
            <TimelineItem
              day="Pre-trip"
              title="Meet-up Briefing & Dinner"
              description="Pre-trip orientation meeting with travellers and family to discuss itinerary, expectations, and preparation for the journey."
            />
            <TimelineItem
              day="Days 1-3"
              title="Arrival & Madinah Experience"
              description="Arrive in Madinah, settle into accommodations, visit Masjid al-Nabawi, Tour in Madinah and experience the city's spiritual atmosphere."
            />
            <TimelineItem
              day="Days 4-7"
              title="Makkah & Umrah"
              description="Travel to Makkah, perform Umrah, spend time in worship at the Haram, and bond with brothers."
            />
            <TimelineItem
              day="Days 8-10"
              title="Jeddah Exploration"
              description="Discover the coastal city of Jeddah, enjoy a Red Sea adventure with options for scuba diving or boat tours, and other adventures."
            />
            <TimelineItem
              day="Days 11-12"
              title="Returning Home"
              description="Return to Madinah for a final reflection on your journey followed by a farewell dinner to share memories and growth. As we depart for the UK, we do so with a renewed sense of purpose, ready to work on new projects and continue our personal development."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
