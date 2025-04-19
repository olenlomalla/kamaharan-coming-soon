import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  // You can remove the title prop if you're not using it
  // If you want to keep it for future use, leave it commented
  // title?: string;
}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handles navigation to the top of /brothersumrah
  const handleTitleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default link behavior
    if (location.pathname !== "/brothersumrah") {
      navigate("/brothersumrah");
      setTimeout(scrollToTop, 100); // Wait for navigation, then scroll
    } else {
      scrollToTop();
    }
  };

  // Helper to scroll to the section
  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  // Handles navigation and scrolling
  const handleNavClick = (id: string) => {
    if (location.pathname !== "/brothersumrah") {
      navigate("/brothersumrah");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // Adjust timeout if needed for your app
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          to="/brothersumrah"
          className="font-display text-5xl font-bold text-umrah-darkPurple"
          onClick={handleTitleClick} // Added onClick handler
        >
          Brothers <span className="text-umrah-gold">Umrah</span> 2025/26
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <span
            onClick={() => handleNavClick("top")}
            className="cursor-pointer text-umrah-darkPurple transition-colors hover:text-umrah-purple"
          >
            Home
          </span>
          <span
            onClick={() => handleNavClick("experience")}
            className="cursor-pointer text-umrah-darkPurple transition-colors hover:text-umrah-purple"
          >
            The Experience
          </span>
          <span
            onClick={() => handleNavClick("journey-itinerary")}
            className="cursor-pointer text-umrah-darkPurple transition-colors hover:text-umrah-purple"
          >
            Journey Itinerary
          </span>
          <span
            onClick={() => handleNavClick("benefits")}
            className="cursor-pointer text-umrah-darkPurple transition-colors hover:text-umrah-purple"
          >
            Why This Trip?
          </span>
          <span
            onClick={() => handleNavClick("pricing")}
            className="cursor-pointer text-umrah-darkPurple transition-colors hover:text-umrah-purple"
          >
            Pricing & Packages
          </span>
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="btn-primary hidden md:block"
            onClick={() => handleNavClick("contact-section")}
          >
            Contact Us
          </button>
          <button className="text-umrah-darkPurple md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
