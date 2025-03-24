import { FC } from "react";

import { TextElement } from "@/types/customSliderModified";

interface SliderDescriptionProps {
  description: TextElement;
}

const SliderDescription: FC<SliderDescriptionProps> = ({ description }) => {
  return (
    <div className="mt-[8px]">
      <h3 className="decoration-skip-ink-none text-left font-heading text-[16px] font-normal leading-[18px] tracking-[0.75px]">
        {description.head}
      </h3>

      <p className="text-left font-body text-[12px] font-normal leading-6 tracking-[0.75px]">
        {description.price}
      </p>

      <div className="flex items-center gap-[8px]">
        <img
          src="/icons/rate-star.svg"
          alt="Rates of deal"
          width={22}
          height={22}
        />
        <p className="decoration-skip-ink-none text-left font-body text-[10px] font-normal leading-[18px] tracking-[0.75px]">
          <span className="decoration-skip-ink-none mr-[4px] text-left font-body text-[16px] font-[700] leading-[18px] tracking-[0.75px]">
            {description.rate}
          </span>
          ({description.reviews} reviews)
        </p>
      </div>
    </div>
  );
};

export default SliderDescription;
