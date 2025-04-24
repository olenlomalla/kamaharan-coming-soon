import { FC, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Mail, MessageSquare, Phone } from "lucide-react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle smooth scrolling with offset for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate position with offset (120px offset to account for headers)
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset - 120;

        // Smooth scroll to that position
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Effect to scroll to top when navigating to Terms or Privacy pages
  useEffect(() => {
    // Check if we're on terms or privacy page and scroll to top
    if (location.pathname === "/terms" || location.pathname === "/privacy") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleLogoClick = (): void => {
    navigate("/");
  };

  return (
    <footer className="bg-umrah-darkPurple py-12 text-white">
      <div className="container-custom">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo and Description */}
          <div>
            <Link to="/" onClick={handleLogoClick}>
              <img
                src="/icons/logo-white.svg"
                alt="Kamaharan Logo"
                className="mb-4 h-10 w-auto cursor-pointer"
              />
            </Link>
            <p className="text-gray-300">
              A transformative first of its kind journey combining faith,
              adventure, lifelong brotherhood and development for Young Muslims.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 transition-colors hover:text-white"
                  onClick={handleSmoothScroll}
                >
                  The Experience
                </a>
              </li>
              <li>
                <a
                  href="#journey-itinerary"
                  className="text-gray-300 transition-colors hover:text-white"
                  onClick={handleSmoothScroll}
                >
                  Journey Itinerary
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-300 transition-colors hover:text-white"
                  onClick={handleSmoothScroll}
                >
                  Why This Trip?
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 transition-colors hover:text-white"
                  onClick={handleSmoothScroll}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 transition-colors hover:text-white"
                  onClick={handleSmoothScroll}
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="mb-4">
              <h3 className="font-display text-xl font-bold">
                Brothers <span className="text-umrah-gold">Umrah 2025/26</span>
              </h3>
            </div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-3 text-umrah-gold" size={18} />
                <span>0203 4888 903</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-umrah-gold" size={18} />
                <span>Support@kamaharan.com</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="mr-3 text-umrah-gold" size={18} />
                <span>WhatsApp:</span>
              </li>
              <li className="mt-2">
                <img
                  src="/images/Whatsapp Qrcode.png"
                  alt="WhatsApp QR Code"
                  className="h-36 w-36 object-contain"
                />
                <div className="mt-2">
                  <span className="text-sm">
                    Scan to message us on WhatsApp
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">
            &copy; {currentYear} Kamaharan all rights reserved. Operated by MA
            Global
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
