import { FC, useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-4 rounded-lg border-none bg-white shadow-sm">
      <button
        className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? "rotate-180 transform" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && <div className="px-6 pb-4 text-gray-600">{answer}</div>}
    </div>
  );
};

const FAQ: FC = () => {
  return (
    <section id="faq" className="bg-umrah-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="heading-lg mb-6 text-umrah-darkPurple">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our Brothers Umrah journey
            and the Kamaharan Development programme.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <FAQItem
            question="What are the requirements for Umrah?"
            answer="For Umrah, you'll need a valid passport with at least six months validity, an Umrah visa (which we'll assist you with), appropriate Islamic attire including Ihram (we will provide). Most importantly, come with a mindset ready for spiritual growth, discipline, and meaningful brotherhood."
          />

          <FAQItem
            question="How does the Kamaharan Development Programme Work?"
            answer="After returning to the UK, participants are offered priority access to open roles across Kamaharan's growing tech and AI projects. Whether it's contributing to real-world digital solutions, creative content, or community tech initiatives, each opportunity is designed to build skills, confidence, and purpose. These roles enable participants to gain valuable experience, earn an income, and continue their personal and professional development as part of Kamaharan's long-term mission."
          />

          <FAQItem
            question="What's the typical group size?"
            answer="We limit our groups to 25 brothers to ensure a meaningful, personal experience. This creates an intimate environment for building connections while providing enough diversity for enriching networking opportunities."
          />

          <FAQItem
            question="Is there a payment plan available?"
            answer="Yes! After the initial deposit of £600, we offer flexible payment plans allowing you to pay the remaining balance in monthly instalments leading up to the trip. Please contact us for personalised payment arrangements."
          />

          <FAQItem
            question="What if I already have a job?"
            answer="That's absolutely fine. Kamaharan's mission is to support your personal and professional development, no matter your current situation. Even if you're already working, there will always be opportunities to earn extra income on the side or during weekends through Kamaharan's projects. Whether it's gaining new skills, expanding your network, or exploring part-time roles in tech and AI, there's a place for you in the journey."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
