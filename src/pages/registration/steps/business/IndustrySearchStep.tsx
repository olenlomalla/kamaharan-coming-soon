import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import SearchInput from "@/components/registration/SearchInput";
import StepHeader from "@/components/registration/StepHeader";
import { RegistrationStepProps } from "@/types/registration";

const IndustrySearchStep: React.FC<RegistrationStepProps> = ({
  title,
  updateRegistrationData,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      updateRegistrationData({
        businessType: searchQuery.trim() as
          | "retail"
          | "restaurant"
          | "cafe"
          | "beautySalon"
          | "fitnessCenter"
          | "travelAgency"
          | "professionalServices"
          | "automotive"
          | "deals",
        showIndustrySearch: false,
        showFullIndustrySearch: true,
      });
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-[44px] p-6">
      <StepHeader title={title} />
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-lg flex-col gap-5"
      >
        <p className="text-[16px] font-normal">Industry</p>
        <SearchInput
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ButtonCustom
          type="submit"
          title="Search"
          className={`w-full ${!searchQuery.trim() ? "cursor-not-allowed opacity-50" : ""}`}
        />
      </form>
    </div>
  );
};

export default IndustrySearchStep;
