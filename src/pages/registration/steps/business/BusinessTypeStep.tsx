import React, { useEffect, useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
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
  const [isNavigatingToSearch, setIsNavigatingToSearch] =
    useState<boolean>(false);
  useEffect(() => {
    if (isNavigatingToSearch && registrationData.showIndustrySearch) {
      onNext();
      setIsNavigatingToSearch(false);
    }
  }, [registrationData, isNavigatingToSearch, onNext]);
  const businessTypes = [
    "Retail",
    "Restaurant",
    "Café",
    "Beauty Salon",
    "Fitness Centre",
    "Travel Agency",
    "Professional Services",
    "Automotive",
    "Deals",
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    updateRegistrationData({ businessType: type });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType) {
      onNext();
    }
  };

  const handleAllIndustries = () => {
    setIsNavigatingToSearch(true);
    updateRegistrationData({
      showIndustrySearch: true,
      businessType: "",
      searchQuery: "",
    });
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center p-6">
      <div className="flex w-full flex-col gap-8 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title || "Business Type/Industry"}
        </h1>
        <p className="text-body mb-8 text-[18px] leading-[24px]">
          {description || "What type of business do you run?"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
          {businessTypes.map((type) => (
            <BusinessTypeCard
              key={type}
              title={type}
              isSelected={selectedType === type}
              onClick={handleTypeSelect}
              className="lg:w-[280px]"
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

        <ButtonCustom type="submit" title="Next" className={`w-full`} />
      </form>
    </div>
  );
};

export default BusinessTypeStep;
