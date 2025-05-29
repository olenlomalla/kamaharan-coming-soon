import { Button } from "@/components/ui/button";
import { CircleDollarSign } from "lucide-react";

const TicketTiers = () => {
  return (
    <section
      id="tickets"
      className="from-beige/30 bg-gradient-to-b to-white py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-playfair mb-6 text-5xl font-bold">
            <span className="relative inline-block after:absolute after:-bottom-4 after:left-0 after:h-1 after:w-full after:bg-primary/30 after:content-['']">
              Choose Your Experience
            </span>
          </h2>
          <p className="font-montserrat text-2xl text-gray-600">
            Select the perfect ticket tier for your evening
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              name: "Gold Ticket",
              price: "£65",
              features: [
                "3-Course Meal",
                "Access to All Talks",
                "Networking Session",
                "Event Materials",
              ],
            },
            {
              name: "Diamond Ticket",
              price: "£80",
              features: [
                "Everything in Gold",
                "Competition Entry",
                "Professional Photo",
                "Luxury Goodie Bag",
              ],
            },
            {
              name: "Platinum Ticket",
              price: "£155",
              features: [
                "Everything in Diamond",
                "VIP Access",
                "Private Networking",
                "Future Projects Preview",
              ],
            },
          ].map((tier, index) => (
            <div
              key={index}
              className={`transform transition-all duration-300 hover:-translate-y-2 ${
                index === 1 ? "lg:-translate-y-4" : ""
              }`}
            >
              <div
                className={`flex h-full flex-col rounded-2xl bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] ${
                  index === 1
                    ? "border-2 border-primary"
                    : "border-rose-light/20 border"
                }`}
              >
                <div className="mb-8 flex-grow text-center">
                  <h3 className="font-playfair mb-4 text-2xl font-bold">
                    {tier.name}
                  </h3>
                  <div className="mb-8 flex items-center justify-center gap-2">
                    <CircleDollarSign className="h-8 w-8 text-primary" />
                    <span className="font-montserrat text-4xl font-bold">
                      {tier.price}
                    </span>
                  </div>
                  <ul className="mb-8 space-y-4">
                    {tier.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="font-montserrat">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={`font-montserrat w-full py-6 text-lg ${
                    index === 1
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  Reserve Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketTiers;
