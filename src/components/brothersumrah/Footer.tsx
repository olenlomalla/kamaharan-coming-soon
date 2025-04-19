import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Mail, MessageSquare, Phone } from "lucide-react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Function to navigate to the home page
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
                className="mb-4 h-10 w-auto cursor-pointer" // Make sure it's a pointer
              />
            </Link>
            <p className="text-gray-300">
              A transformative first of its kind journey combining faith,
              adventure, and lifelong brotherhood for Young Muslims in the UK.
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
                >
                  The Experience
                </a>
              </li>
              <li>
                <a
                  href="#journey-itinerary"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Journey Itinerary
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Why This Trip?
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 transition-colors hover:text-white"
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

          {/* Column 3: Brothers Umrah 2025/26 above Contact Us */}
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
              {/* Replace the old QR code with the new one */}
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
            &copy; {currentYear} Kamaharan in partnership with Dune Tours (a
            trading name of MP Global). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
