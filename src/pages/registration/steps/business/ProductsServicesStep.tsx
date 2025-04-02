import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import SelectCustom from "@/components/registration/SelectCustom";
import StepHeader from "@/components/registration/StepHeader";
import {
  ProductsAndServices,
  RegistrationStepProps,
} from "@/types/registration";

const ProductsServicesStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<ProductsAndServices>({
    services: "",
    hasSpecialPackages: false,
    hasDeliveryTakeaway: false,
    hasEcoFriendlyOptions: false,
    hasWholesaleDiscounts: false,
    productType: "physical",
  });

  const serviceOptions = [
    { value: "Cleaning", label: "Cleaning" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "Repair", label: "Repair" },
    { value: "Installation", label: "Installation" },
    { value: "Consulting", label: "Consulting" },
    { value: "Training", label: "Training" },
  ];

  const productOptions = [
    { value: "physical", label: "Physical" },
    { value: "digital", label: "Digital" },
    { value: "both", label: "Both" },
  ];

  const handleServiceTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, services: value }));
  };

  const handleProductTypeChange = (value: string) => {
    if (value === "physical" || value === "digital" || value === "both") {
      setFormData((prev) => ({ ...prev, productType: value }));
    }
  };

  const handleToggleChange =
    (field: keyof ProductsAndServices) => (value?: boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value || false }));
    };

  const handleNext = () => {
    updateRegistrationData({ productsAndServices: formData });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-12 p-6">
      {/* Header */}
      <StepHeader title={title} description={description} className="gap-4" />

      {/* Content */}
      <div className="w-full space-y-8">
        <div className="space-y-6">
          <label className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            What services/products do you offer?
          </label>
          <SelectCustom
            options={serviceOptions}
            selectedValue={formData.services}
            onChange={handleServiceTypeChange}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-6">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            Do you offer special packages or bundles?
          </span>
          <CheckBoxCustom
            checked={formData.hasSpecialPackages}
            onChange={handleToggleChange("hasSpecialPackages")}
          />
        </div>

        <div className="flex items-center justify-between gap-6">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            Do you offer delivery or takeaway services?
          </span>
          <CheckBoxCustom
            checked={formData.hasDeliveryTakeaway}
            onChange={handleToggleChange("hasDeliveryTakeaway")}
          />
        </div>
        <SelectCustom
          options={productOptions}
          selectedValue={formData.productType}
          onChange={handleProductTypeChange}
          title="Do you sell physical or digital products?"
        />

        <div className="flex items-center justify-between gap-6">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            Are any of your products or services eco-friendly or sustainable?
          </span>
          <CheckBoxCustom
            checked={formData.hasEcoFriendlyOptions}
            onChange={handleToggleChange("hasEcoFriendlyOptions")}
          />
        </div>

        <div className="flex items-center justify-between gap-6">
          <span className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            Do you provide wholesale or bulk order discounts?
          </span>
          <CheckBoxCustom
            checked={formData.hasWholesaleDiscounts}
            onChange={handleToggleChange("hasWholesaleDiscounts")}
          />
        </div>
      </div>

      <ButtonCustom
        title="Next"
        onClick={handleNext}
        className="mb-[20px] w-full"
      />
    </div>
  );
};

export default ProductsServicesStep;
