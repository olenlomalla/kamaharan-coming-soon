import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";
import { RegistrationStepProps } from "@/types/registration";

const LocationNotificationStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const handleLocationAccess = () => {
    console.log("Requesting location access");
    updateRegistrationData({ allows: { location: true, notification: false } });
  };

  const handleNotificationAccess = () => {
    console.log("Requesting notification access");
    updateRegistrationData({ allows: { location: false, notification: true } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-[86px] p-6">
      <StepHeader title={title} description={description} />

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="flex w-full flex-col gap-6">
          <ButtonCustom
            type="button"
            title="Allow location access"
            onClick={handleLocationAccess}
          />
          <p className="text-center text-[16px] leading-[18px] tracking-[0.75px] text-[#363537]">
            Help us personalize your experience
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          <ButtonCustom
            type="button"
            title="Allow notifications"
            onClick={handleNotificationAccess}
          />
          <p className="text-center text-[16px] leading-[18px] text-[#363537]">
            Get updates about deals and events
          </p>
        </div>
        <ButtonCustom type="submit" title="Next" className="w-full" />
      </form>
    </div>
  );
};

export default LocationNotificationStep;
