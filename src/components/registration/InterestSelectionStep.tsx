import React from "react";

import BusinessTypeCard from "./BusinessTypeCard";
import ButtonCustom from "./ButtonCustom";
import StepHeader from "./StepHeader";

interface InterestSelectionStepProps {
  title: string;
  description?: string;
  interests: string[];
  selectedInterest?: string;
  onSelectInterest: (interest: string) => void;
  onNext: () => void;
}

const InterestSelectionStep: React.FC<InterestSelectionStepProps> = ({
  title,
  description,
  interests,
  selectedInterest,
  onSelectInterest,
  onNext,
}) => {
  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-col items-center justify-center gap-12 p-6">
      <StepHeader title={title} description={description} />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {interests.map((interest) => (
          <BusinessTypeCard
            key={interest}
            title={interest}
            isSelected={selectedInterest === interest}
            onClick={() => onSelectInterest(interest)}
          />
        ))}
      </div>
      <ButtonCustom
        title="Next"
        onClick={onNext}
        className="w-full lg:w-[448px]"
      />
    </div>
  );
};

export default InterestSelectionStep;
