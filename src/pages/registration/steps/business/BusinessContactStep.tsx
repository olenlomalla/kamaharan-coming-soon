import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import ContactInput from "@/components/registration/ContactInput";
import StepHeader from "@/components/registration/StepHeader";
import {
  ContactInformation,
  RegistrationStepProps,
} from "@/types/registration";

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
  const [contactInfo, setContactInfo] = useState<ContactInformation>({
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

  const handleNext = () => {
    updateRegistrationData({ contactInformation: contactInfo });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-12 p-6">
      <StepHeader title={title} description={description} />
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

      <ButtonCustom title="Next" onClick={handleNext} className="w-full" />
    </div>
  );
};

export default BusinessContactStep;
