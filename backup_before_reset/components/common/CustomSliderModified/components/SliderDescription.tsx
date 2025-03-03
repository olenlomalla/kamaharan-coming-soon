import { TextElement } from "@/types/customSliderModified";
import { FC } from "react";

interface SliderDescriptionProps {
  description: TextElement;
}

const SliderDescription: FC<SliderDescriptionProps> = ({ description }) => {
  return (
    <div className="mt-[8px]">
      <h3 className="font-heading font-normal text-[16px] text-left decoration-skip-ink-none leading-[18px] tracking-[0.75px]">
        {description.head}
      </h3>

      <p className="font-body font-normal text-[12px] text-left leading-6 tracking-[0.75px]">
        {description.price}
      </p>

      <div className="flex items-center gap-[8px]">
        <img
          src="/icons/rate-star.svg"
          alt="Rates of deal"
          width={22}
          height={22}
        />
        <p className="font-body font-normal text-[10px] text-left decoration-skip-ink-none leading-[18px] tracking-[0.75px]">
          <span className="mr-[4px] font-[700] font-body text-[16px] text-left decoration-skip-ink-none leading-[18px] tracking-[0.75px]">
            {description.rate}
          </span>
          ({description.reviews} reviews)
        </p>
      </div>
    </div>
  );
};

export default SliderDescription;
