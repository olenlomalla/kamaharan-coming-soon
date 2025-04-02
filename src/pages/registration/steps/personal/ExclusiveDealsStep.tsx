import { FC, useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import StepHeader from "@/components/registration/StepHeader";
import { DealPreferences, RegistrationStepProps } from "@/types/registration";

const ExclusiveDealsStep: FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<DealPreferences>({
    wantsExclusiveDiscounts: false,
    preferredDealTypes: [],
    wantsPromotionNotifications: false,
  });

  const handleInfoToggle =
    (field: keyof typeof formData) => (value?: boolean | string) => {
      setFormData((prev: DealPreferences) => ({
        ...prev,
        [field]: value || false,
      }));
    };

  const onSubmit = () => {
    updateRegistrationData({
      dealPreferences: formData,
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
          checked={formData.wantsExclusiveDiscounts}
          onChange={handleInfoToggle("wantsExclusiveDiscounts")}
        />
      </div>
      <span className="font-body text-[16px] font-normal leading-[18px] text-[#33475B]">
        What type of deals interest you the most? (Select all that apply)
      </span>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {typeOfDealsMostInterest.map((option) => (
          <BusinessTypeCard
            key={option}
            title={option}
            isSelected={formData.preferredDealTypes.includes(option)}
            onClick={() => handleInfoToggle("preferredDealTypes")(option)}
          />
        ))}
      </div>
      <div className="flex flex-row gap-6 lg:w-[469px]">
        <label className="tex-[16px] font-body font-normal leading-[18px] tracking-[0.75px] text-[#000000]">
          Would you like to be notified when your favourite businesses have
          promotions?
        </label>
        <CheckBoxCustom
          checked={formData.wantsPromotionNotifications}
          onChange={handleInfoToggle("wantsPromotionNotifications")}
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
