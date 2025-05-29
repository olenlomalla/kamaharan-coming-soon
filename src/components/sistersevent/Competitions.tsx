import { Award, Gift, Heart, Star } from "lucide-react";

const Competitions = () => {
  return (
    <section id="competitions" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-playfair mb-6 text-5xl font-bold">
            <span className="relative inline-block after:absolute after:-bottom-4 after:left-0 after:h-1 after:w-full after:bg-primary/30 after:content-['']">
              Competition Categories
            </span>
          </h2>
          <p className="font-montserrat text-2xl text-gray-600">
            Win Amazing Prizes in Our Beauty & Style Competition
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Star,
              title: "Best Hair",
              description: "Showcase your stunning hairstyle",
            },
            {
              icon: Heart,
              title: "Best Dress",
              description: "Flaunt your elegant attire",
            },
            {
              icon: Award,
              title: "Best Makeup",
              description: "Display your makeup artistry",
            },
            {
              icon: Gift,
              title: "Best Overall Look",
              description: "Complete style excellence",
            },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="from-rose-light/10 to-cream/20 border-rose-light/20 h-full rounded-2xl border bg-gradient-to-br p-10 text-center transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
                <item.icon className="mx-auto mb-6 h-16 w-16 text-primary transition-transform group-hover:scale-110" />
                <h3 className="font-playfair mb-4 text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="font-montserrat text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
