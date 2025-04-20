import { FC, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Hero: FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Add this function to handle the scroll with offset
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate position with offset (120px should work well for most headers)
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset - 120;

        // Smooth scroll to that position
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
    setNavOpen(false); // Close menu after click
  };

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
      <div className="absolute inset-0 z-0 bg-umrah-darkPurple/40" />
      {/* Changed from 80% to 40% opacity */}

      {/* Burger Menu */}
      <button
        className="fixed right-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-umrah-purple/80 p-2 shadow-lg md:right-8 md:top-8"
        aria-label="Open navigation menu"
        onClick={() => setNavOpen((open) => !open)}
      >
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {/* Navbar Links - show on burger click (all screen sizes) */}
      {navOpen && (
        <nav className="fixed inset-0 z-20 flex flex-col items-center justify-center space-y-8 bg-umrah-darkPurple/95">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleSmoothScroll}
              className="text-2xl font-bold text-white transition hover:text-umrah-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <div className="container-custom relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="heading-xl mb-6 max-w-4xl animate-fade-in text-white">
          A journey to faith, Adventure and a Prosperous Future
        </h1>

        <p
          className="mb-10 max-w-2xl animate-fade-in text-lg text-white/90 md:text-xl"
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
            className="inline-block rounded-md bg-umrah-purple px-8 py-6 text-lg font-bold uppercase text-white shadow-md transition-all hover:bg-umrah-darkPurple hover:shadow-lg"
          >
            RESERVE YOUR SPOT
          </a>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex animate-bounce justify-center">
          <a
            href="#experience"
            aria-label="Scroll down to learn more"
            onClick={handleSmoothScroll}
          >
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
