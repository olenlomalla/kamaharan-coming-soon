import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import { RegistrationStepProps } from "@/types/registration";

const VerificationStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleInputChange = (index: number, value: string) => {
    // Ensure only numbers
    if (value !== "" && !/^\d+$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Move to next input if current input is filled
    if (value !== "" && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // Update the registration data when all inputs are filled
    if (newCode.every((digit) => digit !== "")) {
      updateRegistrationData({ verificationCode: newCode.join("") });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const isVerificationComplete = verificationCode.every(
    (digit) => digit !== "",
  );

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-2 p-6">
      <div className="flex flex-col text-center">
        <h1 className="text-center font-heading text-[32px] font-semibold leading-[34px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        <p className="text-body text-[16px] font-normal text-[#363537]">
          We've sent your verification link to
          <br />
          {registrationData.email}
        </p>
      </div>
      <p className="mb-2 mt-1 text-center">Verification code</p>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex justify-between">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              className="h-[94px] w-[54px] rounded-[8px] bg-[#EFEFEF] text-center text-xl"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>

        <ButtonCustom type="submit" title="Next" className="mt-[46px] w-full" />
      </form>
    </div>
  );
};

export default VerificationStep;
