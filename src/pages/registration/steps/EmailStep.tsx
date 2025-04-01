import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import SocialButton from "@/components/registration/SocialButton";
import StepHeader from "@/components/registration/StepHeader";
import { authAPI } from "@/services/api";
import { RegistrationStepProps } from "@/types/registration";

const EmailStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await authAPI.sendVerificationCode(
        registrationData.email,
      );
      if (response.data?.token) {
        console.log(response.data.token);
        localStorage.setItem("verification_token", response.data.token);
        onNext();
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Failed to send verification code. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`);
  };

  const socialProviders = [
    { provider: "Facebook", icon: "/icons/register/facebook-icon.svg" },
    { provider: "Google", icon: "/icons/register/google-icon.svg" },
    { provider: "Twitter", icon: "/icons/register/twitter-icon.svg" },
  ];

  return (
    <div className="flex w-full flex-col justify-between px-6 pb-10 lg:flex-row lg:p-0">
      <div className="flex flex-col gap-2 lg:mx-[78px] lg:w-1/3">
        <StepHeader title={title} description={description} />
        <div className="flex w-full flex-col gap-4">
          {socialProviders.map((item) => (
            <SocialButton
              key={item.provider}
              provider={item.provider}
              icon={item.icon}
              onClick={handleSocialSignup}
            />
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="text-6 bg-[#F8F7F4] px-6 text-[#666] text-gray-500">
              OR
            </span>
          </div>
        </div>
        <div
          className="text-center text-[18px] font-normal text-[#333]"
          style={{ fontFamily: "Poppins" }}
        >
          <span>Sign up with your email address</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-[54px]"
        >
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-[16px] border bg-[#EFEFEF] p-3 px-[24px] py-[17px]"
              value={registrationData.email}
              onChange={(e) =>
                updateRegistrationData({ email: e.target.value })
              }
              required
            />
            {error && (
              <span className="px-2 text-sm text-red-500">{error}</span>
            )}
          </div>
          <ButtonCustom
            type="submit"
            title={isLoading ? "Sending..." : "Verify Email"}
            disabled={isLoading}
          />
        </form>
      </div>

      <div className="hidden items-center pb-24 pl-[150px] lg:flex lg:w-2/3">
        <img src="/images/logo/logo.png" alt="Logo" className="h-[78px]" />
      </div>
    </div>
  );
};

export default EmailStep;
