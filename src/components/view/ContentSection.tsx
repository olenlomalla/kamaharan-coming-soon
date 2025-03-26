import React from "react";

import { ContentSectionProps } from "@/types/view";
import { CodeIcon } from "lucide-react";

import BusinessCard from "./BusinessCard";
import LocationCard from "./LocationCard";
import ServiceCard from "./ServiceCard";

const ContentSection = ({ currentBusiness }: ContentSectionProps) => {
  const buttonData = ["Check out our site", "Chat with Us", "Give us a call"];

  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-[2vw] font-body">
      {/* <div className="absolute m-auto mt-0 min-w-0 md:col-span-1" /> */}
      <div className="col-span-1 m-auto mt-0 min-w-0">
        <nav className="ml-auto flex max-w-[140px] flex-col items-center gap-4 text-lg">
          <div>Our items</div>
          <div>Services</div>
          <div>Our Story</div>
          <div>Gallery</div>
          <div>Location</div>
          <div>Contact</div>
        </nav>

        <div className="flex w-full flex-col items-start gap-4 p-4 text-sm">
          <h3 className="font-semibold">Contact Organizer</h3>
          {buttonData.map((button, index) => (
            <button
              key={index}
              className="w-full rounded-full border-2 border-[#F54D33] px-5 py-1 pb-2 text-sm text-[#F54D33]"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-3 flex flex-col items-start gap-14">
        <div className="flex w-[97%] flex-col items-start justify-start gap-4">
          <h3 className="font-semibold">Our Items</h3>
          <div className="flex flex-wrap gap-4">
            {currentBusiness?.items.map((item) => (
              <BusinessCard
                key={item.id}
                className="h-[216px]"
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/* <div className="flex w-full gap-4">
          <div className="min-w-[250px] flex-1 bg-blue-500 p-4 text-white">
            Item 1
          </div>
          <div className="min-w-[250px] flex-1 bg-red-500 p-4 text-white">
            Item 2
          </div>
          <div className="min-w-[250px] flex-1 bg-green-500 p-4 text-white">
            Item 3
          </div>
        </div> */}

        <div className="flex w-[97%] flex-col items-start justify-start gap-4">
          <h3 className="font-semibold">Our Story</h3>
          <p>
            At London Beauty Retreat, we believe in the transformative power of
            self-care. Our journey began with a simple idea: to create a
            sanctuary where everyone can escape the hustle and bustle of city
            life. We stand for holistic wellness, offering a range of treatments
            that nourish the body and soul. Our mission is to empower you to
            prioritize your well-being, helping you to feel rejuvenated and
            balanced. Join us as we continue to grow and inspire a community
            dedicated to beauty from within.
          </p>
        </div>

        <div className="flex w-[97%] flex-col items-start justify-start">
          <h3 className="font-semibold">Our Services</h3>
          <div className="mt-6 flex w-full flex-row items-stretch justify-around">
            {currentBusiness?.services.map((service) => (
              <ServiceCard {...service} />
            ))}
          </div>
        </div>

        <div className="flex w-[97%] flex-col items-start justify-start gap-4">
          <h3 className="font-semibold">Gallery</h3>
          <div className="flex flex-wrap gap-4">
            {currentBusiness?.gallery.map((item) => (
              <BusinessCard
                key={item.id}
                className="h-[216px]"
                image={item.image}
              />
            ))}
            <div className="flex-1 opacity-0">
              <BusinessCard
                key={3}
                className="h-[216px]"
                image={currentBusiness?.gallery[0].image}
              />
            </div>
          </div>
        </div>

        <div className="mb-9 flex w-[90%] flex-col gap-3">
          <LocationCard
            title="Location & Transport"
            renderPropCaption={() => (
              <>
                <div className="flex items-center gap-2">
                  <CodeIcon size={16} />
                  <p className="text-[11px]">
                    45A High Road, Wembley, HA9 7AF London
                  </p>
                </div>
                <div>
                  <button className="] w-full rounded-full px-5 py-1 pb-2 text-sm text-[#F54D33]">
                    Open in Maps
                  </button>
                </div>
              </>
            )}
          />

          <div className="flex w-full flex-row gap-2">
            <button className="w-full rounded-full border-2 border-[#F54D33] px-5 py-1 pb-2 text-sm text-[#F54D33]">
              Add to Route
            </button>
            <button className="w-full rounded-full border-2 border-[#F54D33] bg-[#F54D33] px-5 py-1 pb-2 text-sm text-white">
              Route
            </button>
          </div>

          <LocationCard
            title="Public Transport"
            renderPropCaption={() => (
              <>
                <div className="flex items-center gap-2">
                  <CodeIcon size={16} />
                  <p className="max-w-[30ch] text-[11px] font-semibold">
                    Nearest Bus Stop
                  </p>
                </div>
                <p className="text-[11px] font-semibold text-black">
                  Wembley Central Station
                </p>
                <p className="text-[11px] text-[#4E4B66]">2 min walk</p>
                <div className="flex flex-wrap items-start gap-2">
                  <div className="rounded-full bg-[#FFF1F0] px-3 pb-1 pt-1 text-[11px] leading-[.7] text-[#D83A21]">
                    18
                  </div>
                  <div className="rounded-full bg-[#FFF1F0] px-3 pb-1 pt-1 text-[11px] leading-[.7] text-[#D83A21]">
                    92
                  </div>
                  <div className="rounded-full bg-[#FFF1F0] px-3 pb-1 pt-1 text-[11px] leading-[.7] text-[#D83A21]">
                    182
                  </div>
                  <div className="rounded-full bg-[#FFF1F0] px-3 pb-1 pt-1 text-[11px] leading-[.7] text-[#D83A21]">
                    204
                  </div>
                </div>
              </>
            )}
          />
          <LocationCard
            title=""
            renderPropCaption={() => (
              <>
                <div className="flex items-center gap-2">
                  <CodeIcon size={16} />
                  <p className="max-w-[30ch] text-[11px] font-semibold">
                    Nearest Train Station
                  </p>
                </div>
                <p className="text-[11px] font-semibold text-black">
                  Wembley Central
                </p>
                <p className="text-[11px] text-[#4E4B66]">5 min walk</p>
                <div className="flex flex-wrap items-start gap-2">
                  <div className="rounded-full bg-[#FFF1F0] px-3 pb-1 pt-1 text-[11px] leading-[.7] text-[#D83A21]">
                    Bakerloo Line
                  </div>
                  <div className="rounded-full bg-[#FFF1F0] px-3 pb-1 pt-1 text-[11px] leading-[.7] text-[#D83A21]">
                    London Overground
                  </div>
                </div>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
