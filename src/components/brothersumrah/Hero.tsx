import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* Hero Background - Prophet's Mosque with umbrellas */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/prophet-2249759.jpg)",
          filter: "brightness(0.75)", // 50% lighter than the previous filter (was 0.5)
        }}
      />
      {/* Purple/Gold Overlay - 50% lighter */}
      <div className="bg-umrah-darkPurple/40 absolute inset-0 z-0" />{" "}
      {/* Changed from 80% to 40% opacity */}
      <div className="container-custom relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="heading-xl animate-fade-in mb-6 max-w-4xl text-white">
          A journey to faith, Adventure and a Bright Future
        </h1>

        <p
          className="animate-fade-in mb-10 max-w-2xl text-lg text-white/90 md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Complete Your Umrah, Discover Saudi Arabia, and Build Lifelong
          Connections with Kamaharan's Professional Development Programme for
          Young Muslims
        </p>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://book.stripe.com/fZe14H13f4j54bmdQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-umrah-purple hover:bg-umrah-darkPurple inline-block rounded-md px-8 py-6 text-lg font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
          >
            RESERVE YOUR SPOT
          </a>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex animate-bounce justify-center">
          <a href="#experience" aria-label="Scroll down to learn more">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
