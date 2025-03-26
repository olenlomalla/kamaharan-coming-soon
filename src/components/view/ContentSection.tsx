import React from "react";

import { ContentSectionProps } from "@/types/view";

import BusinessCard from "./BusinessCard";

const ContentSection = ({ currentBusiness }: ContentSectionProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-[34px] font-body">
      <div className="col-span-1 m-auto mt-0 max-w-[263px]">
        <nav className="ml-auto flex max-w-[140px] flex-col items-center gap-4 text-lg">
          <div>Our items</div>
          <div>Services</div>
          <div>Our Story</div>
          <div>Gallery</div>
          <div>Location</div>
          <div>Contact</div>
        </nav>

        {/*contact*/}
        <div className="flex w-full flex-col items-start gap-4 p-4 text-sm">
          <h3 className="font-semibold">Contact Organizer</h3>
          <button className="w-full rounded-full border-2 border-[#F54D33] px-5 py-1 pb-2 text-sm text-[#F54D33]">
            Check out our site
          </button>
          <button className="w-full rounded-full border-2 border-[#F54D33] px-5 py-1 pb-2 text-sm text-[#F54D33]">
            Chat with Us
          </button>
          <button className="w-full rounded-full border-2 border-[#F54D33] px-5 py-1 pb-2 text-sm text-[#F54D33]">
            Give us a call
          </button>
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="font-semibold">Our Items</h3>
          <div className="flex flex-wrap justify-start gap-4">
            {currentBusiness?.items.map((item) => (
              <BusinessCard key={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
