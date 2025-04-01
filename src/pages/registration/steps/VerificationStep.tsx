import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import { authAPI } from "@/services/api";
import { RegistrationStepProps } from "@/types/registration";

// Імпортуємо authAPI

const VerificationStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (index: number, value: string) => {
    if (value !== "" && !/^\d+$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value !== "" && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      updateRegistrationData({ verificationCode: newCode.join("") });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const token = localStorage.getItem("verification_token");
    const code = verificationCode.join("");
    console.log(token);
    if (!token) {
      setError("Verification token is missing.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await authAPI.verifyEmail(token, code);
      console.log(response);
      if (response.status === 200) {
        onNext();
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Failed to verify code. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

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
              className="h-[60px] w-[40px] rounded-[8px] bg-[#EFEFEF] text-center text-xl lg:h-[94px] lg:w-[54px]"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        {error && <span className="text-sm text-red-500">{error}</span>}
        <ButtonCustom
          type="submit"
          title={isLoading ? "Verifying..." : "Next"}
          className="mt-[46px] w-full"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default VerificationStep;
