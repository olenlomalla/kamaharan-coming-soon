import React from "react";

import { ServiceCardProps } from "@/types/common";

const a = {
  id: 0,
  title: "Deep Tissue massage",
  time: "60 min",
  value: "£65",
  rating: 4.8,
  review: "124 reviews",
};
const ServiceCard = ({
  title,
  time,
  value,
  rating,
  review,
  className,
}: ServiceCardProps) => {
  return (
    <div className="flex min-w-[190px] flex-col gap-2 bg-[#FCFCFC] p-4">
      <h4 className="font-body font-semibold">{title}</h4>
      <div className="flex justify-between">
        <div>{time}</div>
        <div>{value}</div>
      </div>
      <div className="flex items-center gap-2">
        <div>{rating}</div>
        <div>{review}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
