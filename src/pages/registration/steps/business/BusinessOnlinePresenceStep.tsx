import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import SelectCustom from "@/components/registration/SelectCustom";
import {
  OnlinePresenceInfo,
  RegistrationStepProps,
} from "@/types/registration";

const BusinessOnlinePresenceStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [onlinePresenceInfo, setOnlinePresenceInfo] =
    useState<OnlinePresenceInfo>({
      yearsInOperation: "0-3 years",
      hasOnlinePresence: false,
      wantsToImprovePresence: false,
    });

  const handleYearsChange = (value: string) => {
    setOnlinePresenceInfo((prev) => ({
      ...prev,
      yearsInOperation: value,
    }));
  };

  const handleToggleChange = (
    field: keyof Omit<OnlinePresenceInfo, "yearsInOperation">,
    value: boolean,
  ) => {
    setOnlinePresenceInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    updateRegistrationData({ onlinePresenceInfo });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-12 p-6">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description}
        </p>
      </div>

      <div className="w-full space-y-8">
        <div className="flex flex-row items-center justify-between">
          <SelectCustom
            options={[
              { value: "0-3 years", label: "0-3 years" },
              { value: "4-7 years", label: "4-7 years" },
              { value: "8-10 years", label: "8-10 years" },
              { value: "10+ years", label: "10+ years" },
            ]}
            selectedValue={onlinePresenceInfo.yearsInOperation}
            onChange={handleYearsChange}
            title="Years in Operation"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px]">
            Do you currently have an online presence (website or social media)?
          </span>
          <CheckBoxCustom
            checked={onlinePresenceInfo.hasOnlinePresence}
            onChange={(value) =>
              handleToggleChange("hasOnlinePresence", value || false)
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px]">
            Would you like Kamaharan to help improve your online presence?
          </span>
          <CheckBoxCustom
            checked={onlinePresenceInfo.wantsToImprovePresence}
            onChange={(value) =>
              handleToggleChange("wantsToImprovePresence", value || false)
            }
          />
        </div>
      </div>

      <ButtonCustom title="Next" onClick={handleNext} className="w-full" />
    </div>
  );
};

export default BusinessOnlinePresenceStep;
