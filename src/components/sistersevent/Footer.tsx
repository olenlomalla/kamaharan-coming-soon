import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-playfair mb-4 text-2xl">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+44123456789"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                +44 123 456 789
              </a>
              <a
                href="mailto:info@kamaharans.com"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                info@kamaharans.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair mb-4 text-2xl">Follow Us</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                @kamaharans
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                Kamaharans
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair mb-4 text-2xl">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-primary">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#competitions" className="hover:text-primary">
                  Competitions
                </a>
              </li>
              <li>
                <a href="#tickets" className="hover:text-primary">
                  Tickets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair mb-4 text-2xl">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest events and news</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow rounded bg-gray-800 px-4 py-2 text-white"
              />
              <button className="rounded bg-primary px-4 py-2 hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Kamaharans Sisters Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
