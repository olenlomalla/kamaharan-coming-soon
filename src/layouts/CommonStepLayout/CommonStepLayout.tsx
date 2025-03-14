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
    <div className="relative z-10 flex flex-col justify-end items-center px-4 sm:px-6 lg:px-8 min-h-[100vh] max-h-[100vh]">
      <div
        className="right-0 bottom-0 left-0 -z-10 absolute h-[40vh]"
        style={{
          background: currentRoundedColor,
          borderTopLeftRadius: "50% 25%",
          borderTopRightRadius: "50% 25%",
        }}
      />

      <div className="space-y-3 sm:space-y-8 mb-[10px] w-full text-center">
        <h1 className="font-bold font-syne text-[#385C80] text-3xl sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto max-w-[30ch] text-base text-black sm:text-lg">
          {description}
        </p>
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        <div className="flex flex-col items-center gap-4 mb-[10px]">
          <StepButton onNext={onNext} text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default CommonStepLayout;
