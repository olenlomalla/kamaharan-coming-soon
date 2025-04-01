import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";
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
      className="mx-auto flex w-full max-w-[448px] flex-col items-center justify-center gap-12 p-6"
    >
      <StepHeader title={title} description={description} />

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
