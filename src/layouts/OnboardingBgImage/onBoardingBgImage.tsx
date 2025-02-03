const OnboardingBgImage = ({
  backgroundImage,
  backgroundColor,
}: {
  backgroundImage: string;
  backgroundColor: string;
}) => {
  return (
    <div className="bg-image-onboarding-container">
      <div
        className="-z-10 absolute inset-0 bg-cover bg-no-repeat bg-center w-full h-[500px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div
        className="-z-20 absolute inset-0 w-full h-full"
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </div>
  );
};

export default OnboardingBgImage;
