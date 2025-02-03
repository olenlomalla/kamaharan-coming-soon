import React from "react";
import { OnboardingStepProps } from "@/types/onboarding";
import SuccessStepLayout from "@/layouts/SuccessStepLayout/SuccessStepLayout";
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
        backgroundColor="#B2E7B1"
      />
      <OnboardingHeader onNext={onNext} />
      <SuccessStepLayout
        onBack={onBack}
        title={title}
        description={description}
        onNext={onNext}
        currentStep={currentStep}
        totalSteps={totalSteps}
        backgroundImage={backgroundImage}
        roundedShapeColor={roundedShapeColor}
      />
    </section>
  );
};

export default WelcomeStep;
