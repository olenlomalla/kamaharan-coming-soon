import React from "react";
import { OnboardingStepProps } from "@/types/onboarding";
import WelcomeStepLayout from "@/layouts/WelcomeStepLayout/WelcomeStepLayout";
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
  return (
    <section className="relative min-h-screen">
      <OnboardingBgImage
        backgroundImage={backgroundImage}
        backgroundColor="#B7D6F5"
        imageHeight={500}
      />
      <OnboardingHeader onNext={onNext} />
      <WelcomeStepLayout
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
