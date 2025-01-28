const BottomIcons = () => {
  const icons = [
    {
      id: 0,
      src: "/icons/info.svg",
      alt: "info",
    },
    {
      id: 1,
      src: "/icons/logo.svg",
      alt: "logo",
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 py-6 px-4 flex justify-between items-center">
      {icons.map((icon) => (
        <img
          key={icon.id}
          width={54}
          height={54}
          src={icon.src}
          alt={icon.alt}
        />
      ))}
    </div>
  );
};

export default BottomIcons;
