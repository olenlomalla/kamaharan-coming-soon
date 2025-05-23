import React from "react";

import OnboardingHeader from "@/components/common/header/OnboardingHeader";
import CommonStepLayout from "@/layouts/CommonStepLayout/CommonStepLayout";
import OnboardingBgImage from "@/layouts/OnboardingBgImage/onBoardingBgImage";
import { OnboardingStepProps } from "@/types/onboarding";

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
  return (
    <section className="relative min-h-[100svh]">
      <OnboardingBgImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundColor="#B2E7B1"
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
        buttonText="Start Exploring"
      />
    </section>
  );
};

export default WelcomeStep;
