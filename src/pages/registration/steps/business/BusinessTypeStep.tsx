import React, { useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";
import { RegistrationStepProps } from "@/types/registration";

const BusinessTypeStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [selectedType, setSelectedType] = useState<string>(
    registrationData.businessType || "",
  );

  const businessTypes = [
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

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    updateRegistrationData({
      businessType: type as
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

  const handleSubmit = () => {
    if (selectedType) {
      onNext();
    }
  };

  const handleAllIndustries = () => {
    updateRegistrationData({
      businessType: undefined,
      showIndustrySearch: true,
      showFullIndustrySearch: false,
    });
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 p-6">
      <StepHeader title={title} description={description} className="gap-8" />

      <div className="relative">
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
          {businessTypes.map((type) => (
            <BusinessTypeCard
              key={type}
              title={type}
              isSelected={selectedType === type}
              onClick={handleTypeSelect}
              className="w-full lg:w-[280px]"
            />
          ))}
        </div>

        <div className="mb-12 mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleAllIndustries}
            className="absolute right-[-28px] text-[14px] font-medium tracking-[0.25px] text-[#E74C3C]"
          >
            All Industries
          </button>
        </div>

        <ButtonCustom
          type="submit"
          title="Next"
          onClick={handleSubmit}
          className={`w-full`}
        />
      </div>
    </div>
  );
};

export default BusinessTypeStep;
