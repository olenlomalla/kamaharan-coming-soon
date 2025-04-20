import { FC } from "react";

import { Check } from "lucide-react";

interface PricingTierProps {
  tier: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  stripeLink: string;
}

const PricingTier: FC<PricingTierProps> = ({
  tier,
  title,
  price,
  description,
  features,
  recommended = false,
  stripeLink,
}) => (
  <div
    className={`relative overflow-hidden rounded-xl transition-all ${
      recommended
        ? "border-2 border-umrah-gold shadow-xl"
        : "border border-gray-200 shadow-lg"
    }`}
  >
    {recommended && (
      <div className="absolute right-0 top-0 bg-umrah-gold px-4 py-1 text-sm font-medium text-white">
        Recommended
      </div>
    )}

    <div className="p-8">
      <div className="mb-6">
        <p className="mb-2 font-semibold text-umrah-purple">{tier}</p>
        <h3 className="heading-md">{title}</h3>
      </div>

      <div className="mb-6">
        <p className="text-3xl font-bold">{price}</p>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>

      <div className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check
              className="mr-2 mt-1 flex-shrink-0 text-umrah-purple"
              size={18}
            />
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>

      <a
        href={stripeLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full rounded-md px-4 py-2 text-center ${
          recommended
            ? "bg-umrah-gold text-white hover:bg-umrah-gold/90"
            : "border border-umrah-purple text-umrah-purple hover:bg-umrah-purple/10"
        }`}
      >
        Book Now
      </a>
    </div>
  </div>
);

const Pricing: FC = () => {
  const stripeLink = "https://book.stripe.com/fZe14H13f4j54bmdQQ";

  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Background Image with similar positioning to ContactForm */}
      <div className="relative w-full bg-white">
        {/* Image container - changes position based on screen size */}
        <div className="absolute inset-0 z-0 md:inset-auto md:left-0 md:top-0 md:h-full md:w-auto md:-translate-x-1/3 md:transform">
          <img
            src="/images/Brothersfront.png"
            alt="Brothers Front Profile"
            className="h-full w-full object-cover md:h-full md:w-auto"
          />
          {/* Overlay for mobile only */}
          <div className="absolute inset-0 bg-black bg-opacity-45 md:hidden"></div>
        </div>

        {/* Content container */}
        <div className="md:pl-30 container-custom relative z-10 mx-auto px-4 py-10 md:py-16">
          {/* On mobile: White background container for better readability */}
          <div className="rounded-xl bg-white/90 p-6 shadow-2xl md:rounded-none md:bg-transparent md:bg-opacity-100 md:p-0 md:shadow-none">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="heading-lg mb-6 text-umrah-darkPurple">
                Pricing & Packages
              </h2>
              <p className="text-gray-600">
                Choose the package that best fits your preferences. All options
                include the unforgettable brotherhood experience.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              <PricingTier
                tier="💎 Tier 1"
                title="Standard Package"
                price="£1,995"
                description="Per person"
                features={[
                  "Pre-Trip Dinner and Orientation",
                  "Enrolment onto Kamaharans Development Programme",
                  "12-day fully guided Umrah journey",
                  "4 & 5 Star Accommodations",
                  "All Excursions & Activities included",
                  "Transportation within Saudi Arabia",
                  "Professional networking",
                ]}
                stripeLink={stripeLink}
              />

              <PricingTier
                tier="💎 Tier 2"
                title="Mentorship Programme"
                price="£2,450"
                description="Per person"
                features={[
                  "Everything in Standard Package",
                  "Personalised 1-to-1 Entrepreneurial/Career Mentorship",
                  "Strategy Sessions & Networking",
                  "AI Tools & Training for University Students",
                  "1-to-1 Guidance Through Kamaharan's Tech Projects",
                  "Post-Trip Dedicated Development Support",
                ]}
                recommended={true}
                stripeLink={stripeLink}
              />
            </div>

            <div className="mx-auto mt-12 max-w-2xl text-center">
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-umrah-purple px-8 py-6 text-lg font-bold uppercase text-white shadow-md transition-all hover:bg-umrah-darkPurple hover:shadow-lg"
              >
                RESERVE YOUR SPOT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
