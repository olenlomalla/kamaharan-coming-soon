import React from "react";

import BusinessTypeCard from "./BusinessTypeCard";
import ButtonCustom from "./ButtonCustom";

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
      <div className="flex w-full flex-col gap-4 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        {description && (
          <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
            {description}
          </p>
        )}
      </div>
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
      <ButtonCustom title="Next" onClick={onNext} className="w-[448px]" />
    </div>
  );
};

export default InterestSelectionStep;
