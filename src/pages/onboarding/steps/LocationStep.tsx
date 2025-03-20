import { OnboardingStepProps } from "@/types/onboarding";
import OnboardingHeader from "@/components/common/header/OnboardingHeader";
import OnboardingBgImage from "@/layouts/OnboardingBgImage/onBoardingBgImage";
import CommonStepLayout from "@/layouts/CommonStepLayout/CommonStepLayout";
import { LocationData, useLocation } from "@/context/LocationContext";
import { useEffect } from "react";

const LocationStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  onNext,
  onBack,
  currentStep,
  totalSteps,
  backgroundImage,
  mobileBackgroundImage,
  roundedShapeColor,
}) => {
  const { userLocation, setUserLocation } = useLocation();

  const handleLocationAndNext = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation: LocationData = {
            latitude: Number(latitude),
            longitude: Number(longitude),
          };

          setUserLocation(newLocation);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (userLocation) {
      onNext();
    }
  }, [userLocation, onNext]);

  return (
    <section className="relative min-h-[100svh]">
      <OnboardingBgImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundColor="#FBC1BA"
      />
      <OnboardingHeader onNext={onNext} />
      <CommonStepLayout
        title={title}
        description={description}
        onNext={handleLocationAndNext}
        onBack={onBack}
        currentStep={currentStep}
        totalSteps={totalSteps}
        backgroundImage={backgroundImage}
        roundedShapeColor={roundedShapeColor}
        buttonText="Enable Location"
      />
    </section>
  );
};

export default LocationStep;
