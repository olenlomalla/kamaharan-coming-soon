import React from "react";

interface SliderDescriptionItemProps {
  head: string;
  price: string;
  rate: string;
  reviews: string;
}

const SliderDescriptionItem: React.FC<SliderDescriptionItemProps> = ({
  head,
  price,
  rate,
  reviews,
}) => {
  return (
    <div className="mt-[8px]">
      <h3 className="decoration-skip-ink-none font-normal font-syne text-[16px] text-left leading-[18px] tracking-[0.75px]">
        {head}
      </h3>

      <p className="font-normal font-syne text-[18px] text-left leading-6 tracking-[0.75px]">
        {price}
      </p>

      <div className="flex items-center gap-[8px]">
        <img
          src="/icons/rate-star.svg"
          alt="Rates of deal"
          width={22}
          height={22}
        />
        <p className="decoration-skip-ink-none font-normal font-syne text-[16px] text-left leading-[18px] tracking-[0.75px]">
          <span className="mr-[4px] decoration-skip-ink-none font-[700] font-syne text-[16px] text-left leading-[18px] tracking-[0.75px]">
            {rate}
          </span>
          ({reviews} reviews)
        </p>
      </div>
    </div>
  );
};

export default SliderDescriptionItem;
