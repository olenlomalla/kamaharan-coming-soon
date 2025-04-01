import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import StepHeader from "@/components/registration/StepHeader";
import TimeInput from "@/components/registration/TimeInput";
import { BusinessHours, RegistrationStepProps } from "@/types/registration";

interface DaySchedule {
  day: keyof BusinessHours;
  label: string;
}

const DAYS: DaySchedule[] = [
  { day: "monday", label: "Monday" },
  { day: "tuesday", label: "Tuesday" },
  { day: "wednesday", label: "Wednesday" },
  { day: "thursday", label: "Thursday" },
  { day: "friday", label: "Friday" },
  { day: "saturday", label: "Saturday" },
  { day: "sunday", label: "Sunday" },
];

const BusinessHoursStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<BusinessHours>({
    monday: { open: "09:00am", close: "05:00pm", isOpen: true },
    tuesday: { open: "09:00am", close: "05:00pm", isOpen: true },
    wednesday: { open: "09:00am", close: "05:00pm", isOpen: true },
    thursday: { open: "09:00am", close: "05:00pm", isOpen: true },
    friday: { open: "09:00am", close: "05:00pm", isOpen: true },
    saturday: { open: "09:00am", close: "05:00pm", isOpen: true },
    sunday: { open: "09:00am", close: "05:00pm", isOpen: true },
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    isFlexible: false,
    closesForHolidays: false,
    has24HourSupport: false,
  });

  const handleTimeChange =
    (day: keyof BusinessHours, type: "open" | "close") => (value: string) => {
      setFormData((prev) => ({
        ...prev,
        [day]: {
          ...prev[day],
          [type]: value,
        },
      }));
    };

  const handleInfoToggle =
    (field: keyof typeof additionalInfo) => (value?: boolean) => {
      setAdditionalInfo((prev) => ({
        ...prev,
        [field]: value || false,
      }));
    };

  const handleSubmit = () => {
    updateRegistrationData({
      businessHours: formData,
      isFlexibleHours: additionalInfo.isFlexible,
      closesForHolidays: additionalInfo.closesForHolidays,
      has24HourSupport: additionalInfo.has24HourSupport,
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-8 p-6">
      <StepHeader
        title={title}
        description={description}
        className="w-[600px] gap-[48px]"
      />

      <div className="w-full space-y-8">
        {DAYS.map(({ day, label }) => (
          <div key={day} className="flex items-center gap-6">
            <span className="w-[120px] font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
              {label}
            </span>
            <TimeInput
              value={formData[day].open}
              onChange={handleTimeChange(day, "open")}
            />
            <span className="mx-4">-</span>
            <TimeInput
              value={formData[day].close}
              onChange={handleTimeChange(day, "close")}
            />
          </div>
        ))}

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-6">
            <span className="flex-1 font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
              Are your hours flexible for special events or private bookings?
            </span>
            <CheckBoxCustom
              checked={additionalInfo.isFlexible}
              onChange={handleInfoToggle("isFlexible")}
            />
          </div>

          <div className="flex items-center justify-between gap-6">
            <span className="flex-1 font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
              Do you close for holidays or religious observances?
            </span>
            <CheckBoxCustom
              checked={additionalInfo.closesForHolidays}
              onChange={handleInfoToggle("closesForHolidays")}
            />
          </div>

          <div className="flex items-center justify-between gap-6">
            <span className="flex-1 font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
              Do you offer 24/7 customer support or emergency services?
            </span>
            <CheckBoxCustom
              checked={additionalInfo.has24HourSupport}
              onChange={handleInfoToggle("has24HourSupport")}
            />
          </div>
        </div>
      </div>

      <ButtonCustom
        title="Next"
        onClick={handleSubmit}
        className="mb-[20px] mt-4 w-[448px]"
      />
    </div>
  );
};

export default BusinessHoursStep;
