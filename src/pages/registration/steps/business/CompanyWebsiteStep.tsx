import React, { useState } from "react";

import ButtonCustom from "../../../../components/registration/ButtonCustom";
import StepHeader from "../../../../components/registration/StepHeader";
import {
  ContactInformation,
  RegistrationStepProps,
} from "../../../../types/registration";

const CompanyWebsiteStep: React.FC<RegistrationStepProps> = ({
  title = "What is your company's website?",
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [website, setWebsite] = useState(
    registrationData.contactInformation?.website || "",
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebsite(e.target.value);
  };

  const handleSubmit = () => {
    // Create a new ContactInfo object with all required fields
    const updatedContactInfo: ContactInformation = {
      // Keep existing values or set defaults
      phone: registrationData.contactInformation?.phone || "",
      whatsapp: registrationData.contactInformation?.whatsapp || "",
      twitter: registrationData.contactInformation?.twitter || "",
      instagram: registrationData.contactInformation?.instagram || "",
      // Update website with new value
      website: website,
    };

    updateRegistrationData({
      contactInformation: updatedContactInfo,
    });
    onNext();
  };
  let textStyle =
    "text-center text-[14px] text-[#000000] leading-[22px] tracking-[0.25px] max-w-[500px] w-full";
  return (
    <div className="mx-auto flex w-full max-w-[459px] flex-col items-center justify-center gap-8 px-6 pb-10 lg:p-0">
      <StepHeader title={title} centered={true} />

      <div className="flex w-full flex-col items-center gap-4">
        <span className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#000000]">
          Company website
        </span>
        <input
          type="text"
          value={website}
          onChange={handleInputChange}
          className="h-[58px] w-full max-w-[500px] rounded-[16px] bg-[#EFEFEF] px-6 font-body text-[16px] leading-[18px]"
          placeholder="company.com"
        />
        <p className={textStyle}>
          Please change it if it's not right. This was our best guess based on
          your email address.
        </p>
      </div>

      <ButtonCustom
        title="Create account"
        onClick={handleSubmit}
        className="w-full lg:w-[448px]"
      />

      <div className={textStyle}>
        <p>
          By creating an account you are agreeing to the Kamaharan{" "}
          <span className="underline">Customer Terms of Service</span>. Your
          data will be hosted in the UK.
        </p>
      </div>
    </div>
  );
};

export default CompanyWebsiteStep;
