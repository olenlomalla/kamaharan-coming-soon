import React from "react";

import { backgroundImages } from "@/constants/common/ComingSoonPage/data";
import { motion } from "framer-motion";

const GradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full">
      {/* Images Grid */}
      <div className="grid h-[40svh] grid-cols-5 sm:h-[100svh]">
        {backgroundImages.map((column, index) => (
          <motion.div
            key={index}
            className="relative h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={column.image}
              alt={column.alt}
            />
          </motion.div>
        ))}
      </div>
      {/* Mobile Gradient Overlay - Unchanged from original */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 via-black/80 to-black to-[40%] sm:hidden" />
      {/* Desktop Gradient Overlay - Completely revised for a seamless blend */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {/* Multiple overlapping gradients for smoother transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent to-50%" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-10% to-transparent to-60%" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 from-20% to-transparent to-70%" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 from-30% to-transparent to-80%" />
      </div>
    </div>
  );
};
export default GradientBackground;

