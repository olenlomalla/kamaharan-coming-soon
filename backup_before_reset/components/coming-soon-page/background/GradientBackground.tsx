import { motion } from "framer-motion";

const backgroundImages = [
  { image: "/images/bg-coming-soon/image6.jpeg", alt: "Business category 1" },
  { image: "/images/bg-coming-soon/image2.jpg", alt: "Business category 2" },
  { image: "/images/bg-coming-soon/image7.jpeg", alt: "Business category 3" },
  { image: "/images/bg-coming-soon/image8.jpg", alt: "Business category 4" },
  { image: "/images/bg-coming-soon/image5.jpg", alt: "Business category 5" },
];

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full max-sm:h-1/2">
      <div className="grid grid-cols-5 h-full">
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
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GradientBackground;
