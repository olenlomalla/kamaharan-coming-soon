import React from "react";

import { Calendar, Compass, MapPin, Users } from "lucide-react";

interface ExperienceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Simplified card component without external dependencies
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="rounded-lg border border-transparent bg-white p-6 shadow-md transition-all duration-300 hover:border-umrah-purple hover:shadow-lg">
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-umrah-purple/10 p-3">
      <Icon size={24} className="text-umrah-purple" />
    </div>
    <h3 className="heading-sm mb-3 text-center">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

interface TimelineItemProps {
  day: string;
  title: string;
  description: string;
}

// Timeline item component
const TimelineItem: React.FC<TimelineItemProps> = ({
  day,
  title,
  description,
}) => (
  <div className="relative border-l-2 border-umrah-purple/30 pb-8 pl-8 last:border-0">
    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-umrah-purple"></div>
    <div className="mb-2">
      <span className="text-sm font-semibold text-umrah-gold">{day}</span>
      <h4 className="heading-sm">{title}</h4>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative overflow-hidden">
      {/* Background Image with similar positioning to ContactForm and Pricing */}
      <div className="relative w-full bg-white">
        {/* Image container - aligned with timeline itinerary box */}
        <div className="absolute bottom-auto top-auto z-0 md:left-0 md:top-[40%] md:h-auto md:w-auto md:-translate-x-1/3 md:transform">
          <img
            src="/images/Professionalbrothers.png"
            alt="Professional Brothers"
            className="h-auto max-h-[800px] w-full object-contain md:h-auto md:w-auto"
          />
          {/* White overlay to make image more pale */}
          <div className="pointer-events-none absolute inset-0 bg-white opacity-30" />
          {/* Overlay for mobile only */}
          <div className="absolute inset-0 bg-black bg-opacity-45 md:hidden"></div>
        </div>

        {/* Content container */}
        <div className="container relative z-10 mx-auto px-4 py-10 md:py-16 md:pl-24">
          {/* On mobile: White background container for better readability */}
          <div className="rounded-xl bg-white/90 p-6 shadow-2xl md:rounded-none md:bg-transparent md:bg-opacity-100 md:p-0 md:shadow-none">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="heading-lg mb-6 text-umrah-darkPurple">
                The Experience
              </h2>
              <p className="text-gray-600">
                Embark on a life changing journey. This is more than just an
                Umrah trip, it's a powerful opportunity to strengthen your Deen,
                build meaningful brotherhoods, and invest in your personal and
                professional growth.
                <br />
                <br />
                From eye-opening experiences in Makkah and Madinah to empowering
                opportunities in the UK and abroad including career support and
                job placement through Kamaharan. This journey is designed to
                inspire transformation, create lasting memories, and open new
                paths forward for both your Deen and personal goals.
                <br />
                <br />
                This is also an opportunity to explore Saudi Arabia like never
                before, through days filled with discovery, adventure, and
                late-night conversations about growth and the new future.
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
              className="rounded-xl bg-white p-8 shadow-lg md:ml-40 md:p-10"
            >
              <h3 className="heading-md mb-8 text-center text-umrah-purple">
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
                  description="Return to Madinah for a final reflection on your journey to share memories and growth. As we depart for the UK, we do so with a renewed sense of purpose, ready to work on new projects and continue our personal development."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
