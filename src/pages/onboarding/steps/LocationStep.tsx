import { useEffect } from "react";
import { OnboardingStepProps } from "@/types/onboarding";
import LocationStepLayout from "@/layouts/LocationStepLayout/LocationStepLayout";
import OnboardingHeader from "@/components/common/header/OnboardingHeader";
import OnboardingBgImage from "@/layouts/OnboardingBgImage/onBoardingBgImage";

const WelcomeStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  onNext,
  onBack,
  currentStep,
  totalSteps,
  backgroundImage,
  roundedShapeColor,
}) => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude: ", position.coords.latitude);
          console.log("Longitude: ", position.coords.longitude);
        },
        (err) => {
          console.error("Error: ", err);
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen">
      <OnboardingBgImage
        backgroundImage={backgroundImage}
        backgroundColor="#FBC1BA"
      />
      <OnboardingHeader onNext={onNext} />
      <LocationStepLayout
        title={title}
        description={description}
        onNext={onNext}
        onBack={onBack}
        currentStep={currentStep}
        totalSteps={totalSteps}
        backgroundImage={backgroundImage}
        roundedShapeColor={roundedShapeColor}
      />
    </section>
  );
};

export default WelcomeStep;
