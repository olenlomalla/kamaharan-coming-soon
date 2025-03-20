import React from "react";
import { motion } from "framer-motion";
import { backgroundImages } from "@/mocks/common/ComingSoonPage/data";

const GradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full">
      {/* Images Grid */}
      <div className="grid grid-cols-5 h-[40svh] sm:h-[100svh]">
        {backgroundImages.map((column, index) => (
          <motion.div
            key={index}
            className="relative h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={column.image}
              alt={column.alt}
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(0,0,0,0.4) 30%,
              rgba(0,0,0,0.8) 60%,
              rgba(0,0,0,1) 80%
            )
          `,
        }}
      />
    </div>
  );
};

export default GradientBackground;
