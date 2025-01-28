const backgroundImages = [
  { image: "/images/image1.jpg", alt: "Business category 1" },
  { image: "/images/image2.jpg", alt: "Business category 2" },
  { image: "/images/image3.jpg", alt: "Business category 3" },
  { image: "/images/image4.jpg", alt: "Business category 4" },
  { image: "/images/image5.jpg", alt: "Business category 5" },
];

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="grid grid-cols-5 h-full">
        {backgroundImages.map((column, index) => (
          <div key={index} className="relative h-full overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${column.image})` }}
              role="img"
              aria-label={column.alt}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientBackground;
