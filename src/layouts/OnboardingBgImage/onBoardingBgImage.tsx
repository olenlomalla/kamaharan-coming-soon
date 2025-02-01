const OnboardingBgImage = ({
  backgroundImage,
  backgroundColor,
  imageHeight,
}: {
  backgroundImage: string;
  backgroundColor: string;
  imageHeight: number;
}) => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          zIndex: "-1",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "1440px",
          height: `${imageHeight}px`,
        }}
      ></div>

      <div
        className="absolute"
        style={{
          width: "100%",
          height: "100%",
          zIndex: "-2",
          backgroundColor: backgroundColor,
        }}
      ></div>
    </div>
  );
};

export default OnboardingBgImage;
