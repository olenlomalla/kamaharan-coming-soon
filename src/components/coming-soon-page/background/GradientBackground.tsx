import React from "react";
import { motion } from "framer-motion";

const backgroundImages = [
  { 
    image: "/images/bg-coming-soon/image6.jpeg", 
    alt: "Robot",
    className: "bg-center max-sm:bg-[position:center_5%]"
  },
  { 
    image: "/images/bg-coming-soon/image2.jpg", 
    alt: "Person",
    className: "bg-center max-sm:bg-[position:center_5%]"
  },
  { 
    image: "/images/bg-coming-soon/image7.jpeg", 
    alt: "Kitch",
    className: "bg-center max-sm:bg-[position:center_5%]"
  },
  { 
    image: "/images/bg-coming-soon/image8.jpg", 
    alt: "Himilo",
    className: "bg-[position:center_-25%] max-sm:bg-[position:center_5%]"
  },
  { 
    image: "/images/bg-coming-soon/image5.jpg", 
    alt: "Person 2",
    className: "bg-[position:center_15%] max-sm:bg-[position:center_5%]"
  },
];

const GradientBackground: React.FC = () => {
  return (
    <>
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <div className="grid grid-cols-5 h-full max-sm:h-[60vh] max-sm:mt-0">
          {backgroundImages.map((column, index) => (
            <motion.div
              key={index}
              className="group relative h-full overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div
                className={`absolute inset-0 bg-cover transition-transform duration-700
                  ${column.className}
                  group-hover:scale-105
                  sm:scale-100 sm:origin-center
                  max-sm:scale-[1.5] max-sm:origin-top`}
                style={{ 
                  backgroundImage: `url(${column.image})`
                }}
                role="img"
                aria-label={column.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay - Desktop */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] hidden sm:block"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay - Mobile */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] sm:hidden"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 10%, transparent 40%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 60%),
                      linear-gradient(90deg, rgba(0,0,0,1) 0%, transparent 15%, transparent 85%, rgba(0,0,0,1) 100%)`
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default GradientBackground;
