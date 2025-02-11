// SliderDescription.tsx
import { FC } from "react";
import { TextElement } from "../textElements";

interface SliderDescriptionProps {
  description: TextElement;
}

const SliderDescription: FC<SliderDescriptionProps> = ({ description }) => {
  return (
    <div className="mt-[8px]">
      <h3 className="font-syne font-normal text-[16px] text-left decoration-skip-ink-none leading-[18px] tracking-[0.75px]">
        {description.head}
      </h3>

      <p className="font-syne font-normal text-[18px] text-left leading-6 tracking-[0.75px]">
        {description.price}
      </p>

      <div className="flex items-center gap-[8px]">
        <img
          src="/icons/rate-star.svg"
          alt="Rates of deal"
          width={22}
          height={22}
        />
        <p className="font-syne font-normal text-[16px] text-left decoration-skip-ink-none leading-[18px] tracking-[0.75px]">
          <span className="mr-[4px] font-[700] font-syne text-[16px] text-left decoration-skip-ink-none leading-[18px] tracking-[0.75px]">
            {description.rate}
          </span>
          ({description.reviews} reviews)
        </p>
      </div>
    </div>
  );
};

export default SliderDescription;
