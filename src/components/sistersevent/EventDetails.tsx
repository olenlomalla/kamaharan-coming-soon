import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

const EventDetails = () => {
  return (
    <section
      id="details"
      className="from-beige/50 bg-gradient-to-b to-white py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="font-playfair mb-16 text-center text-5xl font-bold">
          <span className="relative inline-block after:absolute after:-bottom-4 after:left-0 after:h-1 after:w-full after:bg-primary/30 after:content-['']">
            Event Details
          </span>
        </h2>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="group transition-all duration-300 hover:scale-105 hover:transform">
            <div className="border-rose-light/20 rounded-2xl border bg-white p-10 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
              <Calendar className="mx-auto mb-6 h-14 w-14 text-primary transition-transform group-hover:scale-110" />
              <h3 className="font-playfair mb-3 text-2xl font-semibold">
                Date
              </h3>
              <p className="font-montserrat text-gray-600">
                September 15, 2025
              </p>
            </div>
          </div>

          <div className="group transition-all duration-300 hover:scale-105 hover:transform">
            <div className="border-rose-light/20 rounded-2xl border bg-white p-10 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
              <MapPin className="mx-auto mb-6 h-14 w-14 text-primary transition-transform group-hover:scale-110" />
              <h3 className="font-playfair mb-3 text-2xl font-semibold">
                Location
              </h3>
              <p className="font-montserrat text-gray-600">
                The Royal Garden Hotel, London
              </p>
            </div>
          </div>

          <div className="group transition-all duration-300 hover:scale-105 hover:transform">
            <div className="border-rose-light/20 rounded-2xl border bg-white p-10 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
              <Clock className="mx-auto mb-6 h-14 w-14 text-primary transition-transform group-hover:scale-110" />
              <h3 className="font-playfair mb-3 text-2xl font-semibold">
                Time
              </h3>
              <p className="font-montserrat text-gray-600">
                6:00 PM - 11:00 PM
              </p>
            </div>
          </div>

          <div className="group transition-all duration-300 hover:scale-105 hover:transform">
            <div className="border-rose-light/20 rounded-2xl border bg-white p-10 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
              <Ticket className="mx-auto mb-6 h-14 w-14 text-primary transition-transform group-hover:scale-110" />
              <h3 className="font-playfair mb-3 text-2xl font-semibold">
                Tickets
              </h3>
              <p className="font-montserrat text-gray-600">
                Limited Availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
