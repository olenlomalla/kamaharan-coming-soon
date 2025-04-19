import React from "react";

import { Brain, GraduationCap, Network, Rocket } from "lucide-react";

const FeatureBox = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/90 p-3">
      <Icon size={26} className="text-umrah-gold" />
    </div>
    <div>
      <h3 className="mb-2 text-center text-lg font-semibold text-umrah-gold md:text-left">
        {title}
      </h3>
      <p className="text-center text-gray-200 md:text-left">{description}</p>
    </div>
  </div>
);

const DrivingBonus = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)",
          filter: "brightness(0.5)",
        }}
      />

      <div className="absolute inset-0 z-0 bg-umrah-darkPurple/80" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-lg mb-6 text-white">
              The Projects Shaping Tomorrow:{" "}
              <span className="text-umrah-gold">
                Personal Growth & Career Support
              </span>
            </h2>

            <p className="mb-8 text-lg text-gray-200">
              Unlock your future! After the trip, gain access to Kamaharan's
              personal development programme designed to help young men find
              clarity, develop digital skills, and build successful careers with
              opportunities to join Kamaharan's projects.
            </p>

            <div className="mb-8 rounded-lg border border-umrah-gold/30 bg-umrah-purple/40 p-6">
              <h3 className="mb-2 text-xl font-bold text-umrah-gold">
                Prepare for a New Era of Opportunity
              </h3>
              <p className="text-white">
                Supporting UK brothers in studies or career transitions with the
                tools and guidance needed for success in our rapidly changing
                world.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <FeatureBox
              icon={Rocket}
              title="Career Pathways"
              description="Kamaharan is building tech projects across the UK and Middle East that need ambitious individuals, offering real work opportunities, mentorship, and long-term growth."
            />

            <FeatureBox
              icon={Brain}
              title="Tools for Students"
              description="We've built programmes that boosts education by teaching students to create personalised AI assistants that transform work, revision, research, and time management helping you achieve your true potential without the stress."
            />

            <FeatureBox
              icon={Network}
              title="Stay Ahead in the Digital Age"
              description="Success isn't just about what you know, it's also about having the right people around you. Kamaharan connects you with essential networks for industry insights, cutting-edge tech, and valuable relationships that advance your career and make sure you're not left behind."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingBonus;
