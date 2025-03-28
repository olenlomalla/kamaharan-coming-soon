import { FaRegStar } from "react-icons/fa";

import { ServiceCardProps } from "@/types/common";

const ServiceCard = ({
  title,
  time,
  value,
  rating,
  review,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-[#FCFCFC] p-4">
      <h3 className="font-body text-sm font-570 leading-120 tracking-[0.75px] text-primary-Grayscale-Title-Active">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <p className="font-body text-[11px] font-normal leading-120 tracking-[0.25px] text-primary-Grayscale-Body">
          {time}
        </p>
        <p
          className={
            "font-body text-sm font-570 leading-120 tracking-[0.75px] text-primary-Success-Default"
          }
        >
          {value}
        </p>
      </div>
      <div className="mt-[7px] flex items-center gap-2.5">
        <span className={"mr-[3px] flex items-center gap-2.5"}>
          <FaRegStar color="#B8A888" width={24} height={24} />

          <p
            className={
              "text-md font-570 leading-120 tracking-[0.75px] text-primary-Grayscale-Title-Active"
            }
          >
            {rating}
          </p>
        </span>
        <p
          className={
            "text-[11px] font-normal leading-120 tracking-[0.25px] text-primary-Grayscale-Body"
          }
        >
          ({review})
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
