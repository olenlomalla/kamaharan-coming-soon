import { useEffect, useState } from "react";

interface OnboardingBgImageProps {
  backgroundImage: string;
  backgroundColor: string;
  mobileBackgroundImage: string;
}

const OnboardingBgImage = ({
  backgroundImage,
  backgroundColor,
  mobileBackgroundImage,
}: OnboardingBgImageProps) => {
  const [currentBackgroundImage, setCurrentBackgroundImage] =
    useState(backgroundImage);
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState(backgroundColor);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCurrentBackgroundImage(mobileBackgroundImage);
        setCurrentBackgroundColor("#ffffff");
      } else {
        setCurrentBackgroundImage(backgroundImage);
        setCurrentBackgroundColor(backgroundColor);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundImage, backgroundColor, mobileBackgroundImage]);

  return (
    <div className="bg-image-onboarding-container">
      <div
        className="-z-10 absolute inset-0 bg-cover bg-no-repeat bg-center w-full h-[300px] sm:h-[500px]"
        style={{
          backgroundImage: `url(${currentBackgroundImage})`,
        }}
      ></div>

      <div
        className="-z-20 absolute inset-0 w-full h-full"
        style={{ backgroundColor: currentBackgroundColor }}
      ></div>
    </div>
  );
};

export default OnboardingBgImage;
