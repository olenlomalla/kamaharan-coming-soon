import React, { useEffect, useState } from "react";

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
  const searchQuery = registrationData.searchQuery || "";
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    registrationData.businessType || "",
  );
  const [isNavigatingBack, setIsNavigatingBack] = useState<boolean>(false);

  useEffect(() => {
    if (isNavigatingBack && registrationData.showFullIndustrySearch === false) {
      onBack();
      setIsNavigatingBack(false);
    }
  }, [registrationData, isNavigatingBack, onBack]);

  const allIndustries = [
    "Retail",
    "Restaurant",
    "Café",
    "Beauty Salon",
    "Fitness Centre",
    "Travel Agency",
    "Professional Services",
    "Automotive",
    "Deals",
    "Healthcare",
    "Education",
    "Technology",
    "Real Estate",
    "Construction",
    "Manufacturing",
    "Transportation",
    "Entertainment",
    "Financial Services",
    "Wholesale",
    "Agriculture",
    "Hospitality",
    "Media",
  ];

  const filteredIndustries = searchQuery
    ? allIndustries.filter((industry) => {
        const matches = industry
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        console.log(
          `Checking '${industry}' against '${searchQuery}': ${matches}`,
        );
        return matches;
      })
    : allIndustries;

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    updateRegistrationData({ businessType: industry });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndustry) {
      updateRegistrationData({
        showFullIndustrySearch: false,
        showIndustrySearch: false,
        businessType: selectedIndustry,
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
          {filteredIndustries.length === 0 && (
            <div className="col-span-3 py-6 text-center text-gray-500">
              No industries found matching "{searchQuery}"
            </div>
          )}
        </div>
        <p className="text-center font-body text-[16px] leading-[18px]">
          This was our best guess based on your email address.
        </p>
        <ButtonCustom
          type="button"
          onClick={() => {
            setIsNavigatingBack(true);
            updateRegistrationData({
              showFullIndustrySearch: false,
              searchQuery: searchQuery,
            });
          }}
          title="Not Right? Search All industries"
          className={`w-full`}
        />
      </form>
    </div>
  );
};

export default FullIndustrySearchStep;
