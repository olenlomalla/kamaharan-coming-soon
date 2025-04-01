import { FC, useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import StepHeader from "@/components/registration/StepHeader";
import { ExclusiveDeals, RegistrationStepProps } from "@/types/registration";

const ExclusiveDealsStep: FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [formData, setFormData] = useState<ExclusiveDeals>({
    receiveDiscounts: false,
    typeofDeals: "",
    beNotified: false,
  });
  const handleInfoToggle =
    (field: keyof typeof formData) => (value?: boolean | string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value || false,
      }));
    };
  const onSubmit = () => {
    updateRegistrationData({
      personalPreferences: {
        preferredLanguage:
          registrationData.personalPreferences?.preferredLanguage || "", // Default to empty string
        dateOfBirth: registrationData.personalPreferences?.dateOfBirth || "", // Default to empty string
        gender: registrationData.personalPreferences?.gender || "", // Default to empty string
        ...registrationData.personalPreferences, // Spread existing preferences
        exclusiveDeals: formData, // Assign the new community preferences
      },
    });
    onNext();
  };
  const typeOfDealsMostInterest = [
    "Restaurants & Cafés",
    "Beauty & Grooming Services",
    "Retail & Shopping",
    "Fitness & Wellness",
    "Travel & Experiences",
    "Professional Services",
  ];
  return (
    <div className="mx-auto flex max-w-[940px] flex-col items-center justify-between gap-12 p-6 lg:p-0">
      <StepHeader title={title} />
      <div className="flex flex-row gap-6 lg:w-[469px]">
        <label className="tex-[16px] font-body font-normal leading-[18px] tracking-[0.75px] text-[#000000]">
          Do you want to receive exclusive discounts from businesses in your
          area?
        </label>
        <CheckBoxCustom
          checked={formData.receiveDiscounts}
          onChange={handleInfoToggle("receiveDiscounts")}
        />
      </div>
      <span className="font-body text-[16px] font-normal leading-[18px] text-[#33475B]">
        What type of deals interest you the most? (Select all that apply)
      </span>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {typeOfDealsMostInterest.map((option) => (
          <BusinessTypeCard
            key={option}
            title={option}
            isSelected={formData.typeofDeals === option}
            onClick={handleInfoToggle("typeofDeals")}
          />
        ))}
      </div>
      <div className="flex flex-row gap-6 lg:w-[469px]">
        <label className="tex-[16px] font-body font-normal leading-[18px] tracking-[0.75px] text-[#000000]">
          Would you like to be notified when your favourite businesses have
          promotions?
        </label>
        <CheckBoxCustom
          checked={formData.beNotified}
          onChange={handleInfoToggle("beNotified")}
        />
      </div>
      <ButtonCustom
        title="Next"
        onClick={onSubmit}
        className="w-full lg:w-[448px]"
      />
    </div>
  );
};
export default ExclusiveDealsStep;
