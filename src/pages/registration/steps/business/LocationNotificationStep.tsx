import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import { RegistrationStepProps } from "@/types/registration";

const LocationNotificationStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const handleLocationAccess = () => {
    // Logic to request location access
    console.log("Requesting location access");
    // After location is granted, you might want to update registration data
    updateRegistrationData({ locationAccess: true });
  };

  const handleNotificationAccess = () => {
    // Logic to request notification access
    console.log("Requesting notification access");
    // After notification permission is granted, update registration data
    updateRegistrationData({ notificationAccess: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-[86px] p-6">
      <div className="flex w-full flex-col text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[34px] tracking-[1px] text-[#363537]">
          {title || "Location & Notifications"}
        </h1>
        <p className="text-body text-[16px] leading-[24px] tracking-[0.75px] text-[#363537]">
          {description || "Help us personalize your experience"}
        </p>
      </div>

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
