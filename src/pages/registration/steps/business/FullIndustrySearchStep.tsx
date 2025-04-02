import React, { useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";
import { RegistrationStepProps } from "@/types/registration";

const FullIndustrySearchStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  onBack,
  registrationData,
  updateRegistrationData,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    registrationData.businessType || "",
  );

  const allIndustries = [
    "retail",
    "restaurant",
    "cafe",
    "beautySalon",
    "fitnessCenter",
    "travelAgency",
    "professionalServices",
    "automotive",
    "deals",
  ];

  const filteredIndustries = allIndustries.filter((industry) =>
    industry.toLowerCase().includes(selectedIndustry.toLowerCase()),
  );

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    updateRegistrationData({
      businessType: industry as
        | "retail"
        | "restaurant"
        | "cafe"
        | "beautySalon"
        | "fitnessCenter"
        | "travelAgency"
        | "professionalServices"
        | "automotive"
        | "deals",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndustry) {
      updateRegistrationData({
        businessType: selectedIndustry as
          | "retail"
          | "restaurant"
          | "cafe"
          | "beautySalon"
          | "fitnessCenter"
          | "travelAgency"
          | "professionalServices"
          | "automotive"
          | "deals",
        showFullIndustrySearch: false,
        showIndustrySearch: false,
      });
      onNext();
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center p-6">
      <StepHeader title={title} className="mb-[44px]" />

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 overflow-y-auto">
          {filteredIndustries.map((industry) => (
            <BusinessTypeCard
              key={industry}
              title={industry}
              isSelected={selectedIndustry === industry}
              onClick={handleIndustrySelect}
              className="w-full"
            />
          ))}
        </div>
        <ButtonCustom
          type="button"
          onClick={onBack}
          title="Back"
          className="w-full"
        />
      </form>
    </div>
  );
};

export default FullIndustrySearchStep;
