import { useEffect, useState } from "react";

import StepButton from "@/components/common/onboarding/StepButton";
import StepIndicator from "@/components/common/onboarding/StepIndicator";
import { OnboardingStep } from "@/types/onboarding";

interface CommonStepLayoutProps extends OnboardingStep {
  buttonText: string;
}

const CommonStepLayout = ({
  title,
  description,
  onNext,
  currentStep,
  totalSteps,
  roundedShapeColor,
  buttonText,
}: CommonStepLayoutProps) => {
  const [currentRoundedColor, setCurrentRoundedColor] =
    useState(roundedShapeColor);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCurrentRoundedColor("#ffffff");
      } else {
        setCurrentRoundedColor(roundedShapeColor);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [roundedShapeColor]);

  return (
    <div className="relative z-10 flex max-h-[100vh] min-h-[100vh] flex-col items-center justify-end px-4 sm:px-6 lg:px-8">
      <div
        className="absolute bottom-0 left-0 right-0 -z-10 h-[40vh]"
        style={{
          background: currentRoundedColor,
          borderTopLeftRadius: "50% 25%",
          borderTopRightRadius: "50% 25%",
        }}
      />

      <div className="mb-[10px] w-full space-y-3 text-center sm:space-y-8">
        <h1 className="font-syne text-3xl font-bold text-[#385C80] sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto max-w-[30ch] text-base text-black sm:text-lg">
          {description}
        </p>
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        <div className="mb-[10px] flex flex-col items-center gap-4">
          <StepButton onNext={onNext} text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default CommonStepLayout;
