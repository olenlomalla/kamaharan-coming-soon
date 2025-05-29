import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white">
      <div className="from-rose-light/50 to-cream/50 absolute inset-0 bg-gradient-to-b" />
      <div className="container relative z-10 mx-auto px-4 pt-20 text-center">
        <h1 className="font-playfair mb-8 text-6xl font-bold text-gray-800 md:text-8xl">
          You Are{" "}
          <span className="to-gold-dark bg-gradient-to-r from-primary bg-clip-text text-transparent">
            Invited
          </span>
        </h1>
        <p className="font-playfair mb-8 text-3xl italic text-primary/90 md:text-4xl">
          An Elegant Evening of Food, Fun, Fashion, and the Future
        </p>
        <div className="mx-auto mb-16 max-w-2xl">
          <p className="font-montserrat mb-8 text-xl text-gray-600">
            Sister! We Need to Talk. Join us for an unforgettable evening of
            networking, technology insights, and celebrating the beauty of
            sisterhood.
          </p>
          <p className="font-playfair text-2xl font-semibold text-primary">
            The Largest UK Sisters Event
          </p>
        </div>
        <Button className="font-montserrat rounded-full bg-primary/90 px-12 py-8 text-lg text-white hover:bg-primary">
          Join Us
        </Button>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary/70" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
