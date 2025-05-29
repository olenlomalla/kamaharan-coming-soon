import React from "react";

import { Mail, MessageSquare } from "lucide-react";

const PrivacyPolicyForm: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-umrah-cream">
      {/* Custom Header */}
      <header className="border-b border-gray-100 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between py-6">
            {/* Logo - Far Left */}
            <div>
              <img
                src="/images/Kamaharan Logo.png"
                alt="Kamaharan Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <a
                href="/"
                className="font-medium text-umrah-purple transition-colors hover:text-umrah-darkPurple"
              >
                Home
              </a>
              <a
                href="#footer"
                onClick={handleContactClick}
                className="font-medium text-umrah-purple transition-colors hover:text-umrah-darkPurple"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container-custom mt-16 py-20">
        <div className="prose prose-lg mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
          <h1 className="heading-lg mb-8 text-umrah-darkPurple">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="heading-sm text-umrah-purple">
                1. Information We Collect
              </h2>
              <p>
                When you complete our Development Programme application form, we
                collect the following information:
              </p>

              <h3 className="text-md font-semibold text-umrah-purple">
                Personal Information
              </h3>
              <ul>
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Date of Birth</li>
                <li>Postcode</li>
                <li>UK Driving License Status</li>
              </ul>

              <h3 className="text-md font-semibold text-umrah-purple">
                Professional & Development Information
              </h3>
              <ul>
                <li>Current Employment Status</li>
                <li>Career Goals and Aspirations</li>
                <li>Technology Comfort Level</li>
                <li>Areas of Interest for Exploration</li>
                <li>Business Goals and Vision</li>
                <li>Support Needs Assessment</li>
                <li>Barriers to Professional Development</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">
                2. How We Use Your Information
              </h2>
              <p>We use the information you provide to:</p>
              <ul>
                <li>
                  Process your application for the Sisters Event programme
                </li>
                <li>
                  Assess your suitability and match you with appropriate
                  opportunities
                </li>
                <li>
                  Develop personalized career and personal development plans
                </li>
                <li>
                  Connect you with relevant mentors, training, and business
                  opportunities
                </li>
                <li>Provide targeted support based on your identified needs</li>
                <li>
                  Communicate programme updates, events, and opportunities
                </li>
                <li>Organize logistics for events and meetings</li>
                <li>Measure and improve our programme effectiveness</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">
                3. Legal Basis for Processing
              </h2>
              <p>
                We process your personal data under the following legal bases:
              </p>
              <ul>
                <li>
                  <strong>Consent:</strong> You have explicitly consented to
                  processing for the Development Programme
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> To provide career
                  development and mentorship services
                </li>
                <li>
                  <strong>Contract:</strong> Where processing is necessary to
                  deliver the programme services you have applied for
                </li>
              </ul>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">4. Data Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Programme Mentors:</strong> To provide personalized
                  guidance and support
                </li>
                <li>
                  <strong>Training Partners:</strong> Organizations providing
                  specific skills development
                </li>
                <li>
                  <strong>Business Networks:</strong> For relevant networking
                  and opportunity matching
                </li>
                <li>
                  <strong>Event Organizers:</strong> For logistics and
                  coordination purposes
                </li>
                <li>
                  <strong>Service Providers:</strong> Such as communication
                  platforms and programme management tools
                </li>
              </ul>
              <p>We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">
                5. Data Retention
              </h2>
              <p>
                We retain your information for the duration of the programme and
                up to 2 years afterwards to provide ongoing support and measure
                long-term programme impact. You may request earlier deletion of
                your data at any time.
              </p>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">6. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Rectify inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information, including encrypted
                storage, secure access controls, and regular security
                monitoring.
              </p>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">8. Contact Us</h2>
              <p>
                For questions about this privacy policy or to exercise your data
                protection rights:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@kamaharan.com"
                  className="text-umrah-purple hover:underline"
                >
                  admin@kamaharan.com
                </a>
                <br />
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:02034888903"
                  className="text-umrah-purple hover:underline"
                >
                  02034888903
                </a>
              </p>
            </section>

            <section>
              <h2 className="heading-sm text-umrah-purple">
                9. Updates to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify participants of any significant changes via email or
                through our programme communications.
              </p>
            </section>

            <p className="mt-8 text-sm">
              <strong>Last Updated:</strong> 18 February 2025
            </p>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-umrah-darkPurple py-12 text-white">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="mb-8 flex flex-col items-center justify-between space-y-8 md:flex-row md:items-start md:space-y-0">
            {/* Left: Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/icons/logo-white.svg"
                alt="Kamaharan Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Right: Contact Info */}
            <div className="text-center md:text-right">
              <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-6 md:space-y-0">
                <h4 className="text-lg font-semibold">Contact Us</h4>
                <div className="flex items-center justify-center md:justify-end">
                  <Mail className="mr-2 text-umrah-gold" size={16} />
                  <span className="text-sm">Support@kamaharan.com</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-2 flex items-center justify-center md:justify-end">
                  <MessageSquare className="mr-3 text-umrah-gold" size={18} />
                  <span>WhatsApp:</span>
                </div>
                <div className="flex flex-col items-center md:items-end">
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
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="border-t border-umrah-purple pt-6">
            <p className="text-umrah-lightPurple text-center text-sm">
              © {new Date().getFullYear()} Kamaharan • Empowering potential
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyForm;
