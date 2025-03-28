import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import { RegistrationStepProps } from "@/types/registration";

interface Location {
  address: string;
}

const MultipleLocationsStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [hasMultipleLocations, setHasMultipleLocations] = useState(false);
  const [locations, setLocations] = useState<Location[]>([{ address: "" }]);

  const handleToggleMultipleLocations = () => {
    setHasMultipleLocations(!hasMultipleLocations);
  };

  const handleAddLocation = () => {
    setLocations([...locations, { address: "" }]);
  };

  const handleLocationChange = (index: number, value: string) => {
    const updatedLocations = [...locations];
    updatedLocations[index] = { address: value };
    setLocations(updatedLocations);
  };

  const handleNext = () => {
    updateRegistrationData({
      locations,
      hasMultipleLocations,
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center p-6">
      <div className="mb-12 flex flex-col gap-3 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title || "Multiple Locations"}
        </h1>
        <p className="text-body text-[16px] leading-[24px] tracking-[0.75px] text-[#363537]">
          {description || "Let's get to know you better"}
        </p>
      </div>

      <div className="flex w-full flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-body text-[16px] leading-[24px] tracking-[0.75px] text-[#363537]">
            Do you have multiple locations?
          </span>
          <CheckBoxCustom
            checked={hasMultipleLocations}
            onChange={handleToggleMultipleLocations}
          />
        </div>

        <div className="relative space-y-4">
          {locations.map((location, index) => (
            <div key={index} className="relative">
              <img
                src="/icons/register/location-icon.svg"
                alt="Location"
                className="absolute left-6 top-4 h-6 w-6"
              />
              <input
                type="text"
                value={location.address}
                onChange={(e) => handleLocationChange(index, e.target.value)}
                placeholder="Business Location & Address"
                className="text-body w-full rounded-[16px] bg-[#EFEFEF] py-4 pl-[64px] pr-4"
              />
            </div>
          ))}
        </div>

        {hasMultipleLocations && (
          <button
            onClick={handleAddLocation}
            className="text-body text-end text-[14px] font-normal leading-[22px] text-[#F54D33] transition-colors hover:text-[#d44435]"
          >
            Add Location
          </button>
        )}
      </div>

      <ButtonCustom
        title="Next"
        onClick={handleNext}
        className="mt-12 w-full"
      />
    </div>
  );
};

export default MultipleLocationsStep;
