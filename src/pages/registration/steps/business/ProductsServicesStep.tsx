import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import CheckBoxCustom from "@/components/registration/CheckBoxCustom";
import SelectCustom from "@/components/registration/SelectCustom";
import { ProductsServices, RegistrationStepProps } from "@/types/registration";

const ProductsServicesStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<ProductsServices>({
    serviceType: "Cleaning",
    hasSpecialPackages: false,
    hasDeliveryService: false,
    productType: "Physical",
    isEcoFriendly: false,
    hasWholesaleDiscounts: false,
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
    { value: "Physical", label: "Physical" },
    { value: "Digital", label: "Digital" },
    { value: "Both", label: "Both" },
  ];

  const handleServiceTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
  };

  const handleProductTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, productType: value }));
  };

  const handleToggleChange =
    (field: keyof ProductsServices) => (value?: boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value || false }));
    };

  const handleNext = () => {
    updateRegistrationData({ productsServices: formData });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-12 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title || "Products & Services"}
        </h1>
        <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description ||
            "Your answer will help us to give you the best start."}
        </p>
      </div>

      {/* Content */}
      <div className="w-full space-y-8">
        <div className="space-y-6">
          <label className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            What services/products do you offer?
          </label>
          <SelectCustom
            options={serviceOptions}
            selectedValue={formData.serviceType}
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
            checked={formData.hasDeliveryService}
            onChange={handleToggleChange("hasDeliveryService")}
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
            checked={formData.isEcoFriendly}
            onChange={handleToggleChange("isEcoFriendly")}
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
