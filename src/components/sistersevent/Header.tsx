import { useState } from "react";

import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-rose-light/20 fixed left-0 right-0 top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          <a
            href="#"
            className="font-playfair text-2xl font-bold text-gray-800 transition-colors hover:text-primary"
          >
            Kamaharans Sisters Event
          </a>

          <nav className="hidden space-x-12 md:flex">
            {["About", "Details", "Competitions", "Tickets"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-montserrat relative text-gray-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:content-[''] hover:text-primary hover:after:origin-left hover:after:scale-x-100"
              >
                {item}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-rose-light/20 absolute left-0 right-0 top-24 border-b bg-white md:hidden">
          <nav className="flex flex-col space-y-6 p-6">
            {["About", "Details", "Competitions", "Tickets"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-montserrat text-lg text-gray-600 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
