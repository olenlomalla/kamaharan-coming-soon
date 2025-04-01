import React, { useState } from "react";

import ButtonCustom from "../../../../components/registration/ButtonCustom";
import StepHeader from "../../../../components/registration/StepHeader";
import { RegistrationStepProps } from "../../../../types/registration";

const CompanyNameStep: React.FC<RegistrationStepProps> = ({
  title = "What is your company's name?",
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [companyName, setCompanyName] = useState(
    registrationData.businessName || "",
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = () => {
    updateRegistrationData({
      businessName: companyName,
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-[458px] flex-col items-center justify-center gap-8 p-6 lg:p-0">
      <StepHeader title={title} centered={true} />

      <div className="flex w-full flex-col items-center gap-4">
        <span className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#000000]">
          Company name
        </span>
        <input
          type="text"
          value={companyName}
          onChange={handleInputChange}
          className="h-[58px] w-full max-w-[500px] rounded-[16px] bg-[#EFEFEF] px-6 font-body text-[16px] leading-[18px]"
          placeholder="Company Name"
        />
        <p className="w-full max-w-[500px] text-center text-[14px] leading-[22px] tracking-[0.25px] text-[#000000]">
          Please change it if it's not right. This was our best guess based on
          your email address.
        </p>
      </div>

      <ButtonCustom
        title="Next"
        onClick={handleSubmit}
        className="w-full lg:w-[448px]"
      />
    </div>
  );
};

export default CompanyNameStep;
