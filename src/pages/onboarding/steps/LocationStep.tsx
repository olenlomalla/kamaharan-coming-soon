import { useEffect } from "react";
import { OnboardingStepProps } from "@/types/onboarding";
import OnboardingHeader from "@/components/common/header/OnboardingHeader";
import OnboardingBgImage from "@/layouts/OnboardingBgImage/onBoardingBgImage";
import CommonStepLayout from "@/layouts/CommonStepLayout/CommonStepLayout";

const WelcomeStep: React.FC<OnboardingStepProps> = ({
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
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundColor="#FBC1BA"
      />
      <OnboardingHeader onNext={onNext} />
      <CommonStepLayout
        title={title}
        description={description}
        onNext={onNext}
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

export default WelcomeStep;
