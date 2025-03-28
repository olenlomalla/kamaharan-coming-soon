import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import ContactInput from "@/components/registration/ContactInput";
import { RegistrationStepProps } from "@/types/registration";

interface ContactInfo {
  phone: string;
  whatsapp: string;
  website: string;
  twitter: string;
  instagram: string;
}

type ContactField = {
  key: keyof Omit<
    ContactInfo,
    "hasOnlinePresence" | "wantsToImprovePresence" | "yearsInOperation"
  >;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
};

const contactFields: ContactField[] = [
  {
    key: "phone",
    type: "tel",
    placeholder: "(123) 456-7890",
    icon: <img src="/icons/register/phone.svg" alt="Phone" />,
  },
  {
    key: "whatsapp",
    type: "text",
    placeholder: "WhatsApp: +1 (123) 456-7890",
    icon: <img src="/icons/register/whatsapp.svg" alt="WhatsApp" />,
  },
  {
    key: "website",
    type: "url",
    placeholder: "Website: www.example.com",
    icon: <img src="/icons/register/website.svg" alt="Website" />,
  },
  {
    key: "twitter",
    type: "text",
    placeholder: "Twitter: @example",
    icon: <img src="/icons/register/twitter.svg" alt="Twitter" />,
  },
  {
    key: "instagram",
    type: "text",
    placeholder: "Instagram: @example",
    icon: <img src="/icons/register/instagram.svg" alt="Instagram" />,
  },
];

const BusinessContactStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: "",
    whatsapp: "",
    website: "",
    twitter: "",
    instagram: "",
  });

  const handleInputChange = (
    field: keyof Omit<
      ContactInfo,
      "hasOnlinePresence" | "wantsToImprovePresence"
    >,
    value: string,
  ) => {
    setContactInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleChange = (
    field: "hasOnlinePresence" | "wantsToImprovePresence",
    value: boolean,
  ) => {
    setContactInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    updateRegistrationData({ contactInfo });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center p-6">
      <div className="mb-12 flex flex-col gap-3 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        <p className="text-[16px] leading-[18px] tracking-[0.75px] text-[#363537]">
          {description}
        </p>
      </div>

      <div className="w-full space-y-6">
        {contactFields.map((field) => (
          <ContactInput
            key={field.key}
            type={field.type}
            value={contactInfo[field.key]}
            onChange={(value) => handleInputChange(field.key, value)}
            placeholder={field.placeholder}
            icon={field.icon}
          />
        ))}
      </div>

      <ButtonCustom
        title="Next"
        onClick={handleNext}
        className="mt-12 w-full"
      />
    </div>
  );
};

export default BusinessContactStep;
