import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import { RegistrationStepProps } from "@/types/registration";

interface FormField {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
}

interface FormStepProps
  extends Omit<
    RegistrationStepProps,
    "registrationType" | "setRegistrationType"
  > {
  fields: FormField[];
  onFieldChange: (
    field: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange?: (field: string) => (value: string) => void;
  onSubmit: () => void;
}

const FormStep: React.FC<FormStepProps> = ({
  title,
  description,
  fields,
  onFieldChange,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[448px] flex-col items-center justify-center gap-12"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        <p className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#424144]">
          {description}
        </p>
      </div>

      <div className="mt-[53px] w-full space-y-4">
        {fields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={onFieldChange(field.name)}
            className="h-[58px] w-full rounded-[16px] bg-[#EFEFEF] px-6 font-body text-[16px] leading-[18px] text-[#5B5A5E]"
            required={field.required}
          />
        ))}
      </div>

      <ButtonCustom title="Next" type="submit" className="mt-9 w-full" />
    </form>
  );
};

export default FormStep;
