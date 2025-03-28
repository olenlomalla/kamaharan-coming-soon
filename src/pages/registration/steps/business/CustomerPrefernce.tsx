import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import SelectCustom from "@/components/registration/SelectCustom";
import {
  CustomerPreference,
  RegistrationStepProps,
} from "@/types/registration";

const CustomerPreferenceStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [customerPreference, setCustomerPreference] =
    useState<CustomerPreference>({
      businessPrimarilyFor: "Men",
      requiredAppointments: false,
      openToWalkIns: false,
    });

  const handleYearsChange = (value: string) => {
    setCustomerPreference((prev) => ({
      ...prev,
      businessPrimarilyFor: value,
    }));
  };

  const handleToggleChange = (
    field: keyof Omit<CustomerPreference, "businessPrimarilyFor">,
    value: boolean,
  ) => {
    setCustomerPreference((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    updateRegistrationData({ customerPreference });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-[591px] flex-col items-center justify-center gap-12 p-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="w-[650px] font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        <p className="w-[400px] font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description}
        </p>
      </div>

      <div className="w-full space-y-8">
        <div className="flex flex-row items-center justify-between">
          <SelectCustom
            options={[
              { value: "men", label: "Men" },
              { value: "woman", label: "Women" },
            ]}
            selectedValue={customerPreference.businessPrimarilyFor}
            onChange={handleYearsChange}
            title="Who is your business primarily for?"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px]">
            Does your business require appointments or bookings?
          </span>
          <CheckBoxCustom
            checked={customerPreference.requiredAppointments}
            onChange={(value) =>
              handleToggleChange("requiredAppointments", value || false)
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px]">
            Are you open to walk-ins?
          </span>
          <CheckBoxCustom
            checked={customerPreference.openToWalkIns}
            onChange={(value) =>
              handleToggleChange("openToWalkIns", value || false)
            }
          />
        </div>
      </div>

      <ButtonCustom title="Next" onClick={handleNext} className="w-full" />
    </div>
  );
};

export default CustomerPreferenceStep;
