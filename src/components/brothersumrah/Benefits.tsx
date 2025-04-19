import { FC } from "react";

import { BookOpen, Compass, Heart, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

const BenefitCard: FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  color = "bg-umrah-purple",
}) => (
  <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
    <div className={`h-2 ${color}`}></div>
    <div className="p-6">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
        <Icon
          size={28}
          className={`${color === "bg-umrah-purple" ? "text-umrah-purple" : "text-umrah-gold"}`}
        />
      </div>
      <h3 className="heading-sm mb-3 text-center">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  </div>
);

const Benefits: FC = () => {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="heading-lg mb-6 text-umrah-darkPurple">
            Why This Trip?
          </h2>
          <p className="text-gray-600">
            Designed specifically for Young Muslim Men from the UK, this journey
            offers unique benefits that go beyond a typical Umrah trip.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <BenefitCard
            icon={Heart}
            title="Faith & Spiritual Growth"
            description="Our first priority is to reconnect with our faith and understand what it means to be Muslim in today's world. We journey to Umrah with guidance from our knowledgable brothers. This is a chance to experience Islam's core teachings first-hand. Along this path we'll discover our relationship with Islam and deepen our faith in the world's most sacred place alongside brothers who share your goals and ambitions."
          />
          <BenefitCard
            icon={Users}
            title="Lifelong Networking & Friendships"
            color="bg-umrah-gold"
            description="This is a chance to connect with experienced brothers who have successfully navigated similar paths and can provide invaluable mentorship, practical guidance, and strategic connections that unlock real career opportunities. Participate in networking and structured activities designed to foster growth, inspiration, and mutual support."
          />
          <BenefitCard
            icon={Compass}
            title="Adventure & Exploration"
            color="bg-umrah-gold"
            description="Our trusted partner, Dune Tours, will guide us through the kingdom's hidden treasures during this trip to Experience Saudi Arabia beyond Umrah, with a careful balance of adventure, culture, and relaxation, providing specialised experiences tailored to our group. They'll ensure we enjoy unforgettable adventure days officially facilitated by the Saudi Ministry of Tourism."
          />
          <BenefitCard
            icon={BookOpen}
            title="Personal & Professional Development"
            description="The core purpose behind this Umrah experience is to renew your Faith and sense of purpose all while preparing you for what comes next. Kamaharan has built pathways for professional advancement through exclusive opportunities in technology, entrepreneurship, AI and other innovative fields that align with Islamic values and ethics."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
