import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";
import { RegistrationStepProps } from "@/types/registration";

const BusinessInfoStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-[101.5px] p-6">
      <StepHeader title={title} description={description} />

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex w-full flex-col gap-4">
          <input
            type="text"
            placeholder="Business Name"
            className="h-[64px] w-full rounded-lg bg-[#EFEFEF] py-[14px] pl-6 text-[16px]"
            value={registrationData.businessName || ""}
            onChange={(e) =>
              updateRegistrationData({ businessName: e.target.value })
            }
            required
          />

          <div className="relative">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 transform">
              <img
                src="/icons/register/location-icon.svg"
                alt="Location"
                className="h-6 w-6"
              />
            </div>
            <input
              type="text"
              placeholder="Business Location & Address"
              className="h-[64px] w-full rounded-lg bg-[#EFEFEF] pl-[72px] text-[16px]"
              value={registrationData.businessLocation || ""}
              onChange={(e) =>
                updateRegistrationData({ businessLocation: e.target.value })
              }
              required
            />
          </div>
        </div>

        <ButtonCustom type="submit" title="Next" className="mt-[84px] w-full" />
      </form>
    </div>
  );
};

export default BusinessInfoStep;
