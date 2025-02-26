import React from "react";
import { motion } from "framer-motion";

const backgroundImages = [
  { image: "/images/bg-coming-soon/image6.jpeg", alt: "Business category 1" },
  { image: "/images/bg-coming-soon/image2.jpg", alt: "Business category 2" },
  { image: "/images/bg-coming-soon/image7.jpeg", alt: "Business category 3" },
  { image: "/images/bg-coming-soon/image8.jpg", alt: "Business category 4" },
  { image: "/images/bg-coming-soon/image5.jpg", alt: "Business category 5" },
];

const GradientBackground: React.FC = () => {
  return (
    <>
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <div className="grid grid-cols-5 h-full sm:grid-cols-3 max-sm:grid-cols-2">
          {backgroundImages.map((column, index) => (
            <motion.div
              key={index}
              className="group relative h-full overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${column.image})` }}
                role="img"
                aria-label={column.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* New Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Additional mobile gradient */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] sm:hidden"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 90%)'
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default GradientBackground;
