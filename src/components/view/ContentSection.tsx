import { useState } from "react";

import { ContentSectionProps } from "@/types/view";
import { BusFront, MapPin, TramFront } from "lucide-react";

import BusinessCard from "./BusinessCard";
import LocationCard from "./LocationCard";
import ServiceCard from "./ServiceCard";

const ContentSection = ({ currentBusiness }: ContentSectionProps) => {
  const buttonData = ["Check out our site", "Chat with Us", "Give us a call"];

  const sections = [
    { id: "our-items", label: "Our items" },
    { id: "services", label: "Services" },
    { id: "our-story", label: "Our Story" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex flex-col gap-[2vw] font-body md:grid md:grid-cols-4 md:grid-rows-1">
      {/* <div className="absolute m-auto mt-0 min-w-0 md:col-span-1" /> */}
      <div className="top-4 order-1 col-span-1 mt-0 min-w-0 justify-end bg-white px-1 max-md:px-4 md:sticky md:h-screen lg:px-4">
        <nav
          id={"nav"}
          className="sticky ml-auto flex w-full flex-col items-center gap-1.5 text-right text-lg font-normal leading-120 tracking-[0.75px]"
        >
          {sections.map((section) => (
            <p
              key={section.id}
              className={`w-full cursor-pointer px-4 py-2 text-right ${
                activeSection === section.id ? "text-[#F54D33]" : "text-black"
              }`}
              onClick={() => handleNavClick(section.id)}
            >
              {section.label}
            </p>
          ))}
        </nav>

        <div
          id={"contactOrganizer"}
          className="md:d-none flex w-full flex-col items-start gap-4 p-4 text-sm"
        >
          <h3 className="mt-2 text-sm font-570 leading-120 tracking-[0.75px] text-black">
            Contact Organizer
          </h3>
          {buttonData.map((button, index) => (
            <button
              key={index}
              className="w-full rounded-full border-2 border-[#F54D33] pb-[11px] pt-[7px] text-sm leading-[22px] tracking-[0.25px] text-[#F54D33]"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div
        id={"content"}
        className="order-2 col-span-3 flex flex-col items-center gap-14 md:items-start"
      >
        <div
          id={"our-items"}
          className="flex w-[97%] flex-col items-start justify-start gap-4"
        >
          <h3 className="grayscale-Label">Our Items</h3>
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

        <div
          id="our-story"
          className="flex w-[97%] flex-col items-start justify-start gap-4"
        >
          <h3 className="grayscale-Label">Our Story</h3>
          <p
            className={
              "font-400 text-[11px] leading-120 tracking-[0.25px] text-primary-Grayscale-Body"
            }
          >
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

        <div
          id={"services"}
          className="flex w-[97%] flex-col items-start justify-start"
        >
          <h3 className="grayscale-Label">Our Services</h3>
          <div className="mt-4 flex w-full flex-row flex-wrap items-stretch justify-between gap-4 px-4 py-2">
            {currentBusiness?.services.map((service) => (
              <ServiceCard {...service} />
            ))}
          </div>
        </div>

        <div
          id={"gallery"}
          className="flex w-[97%] flex-1 flex-col items-start justify-start gap-4"
        >
          <h3 className="grayscale-Label">Gallery</h3>
          <div className="flex w-full flex-wrap justify-between gap-8">
            {currentBusiness?.gallery.map((item) => (
              <BusinessCard
                key={item.id}
                className="h-[216px]"
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div id={"location"} className="mb-9 flex w-[97%] flex-col gap-3">
          <LocationCard
            title="Location & Transport"
            renderPropCaption={() => (
              <>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <p className="grayscale-Body">
                    45A High Road, Wembley, HA9 7AF London
                  </p>
                </div>
                <div>
                  <button className="] tracking-[0.25px]rounded-full w-full px-5 py-2 text-sm leading-[22px] text-[#F54D33]">
                    Open in Maps
                  </button>
                </div>
              </>
            )}
          />

          <div className="flex w-full flex-row gap-2.5">
            <button className="w-full rounded-full border-2 border-[#F54D33] pb-[11px] pt-[7px] text-sm leading-[22px] tracking-[0.25px] text-[#F54D33]">
              Add to Route
            </button>
            <button className="w-full rounded-full border-2 border-[#F54D33] bg-[#F54D33] pb-[11px] pt-[7px] text-sm leading-[22px] tracking-[0.25px] text-white">
              Route
            </button>
          </div>

          <LocationCard
            title="Public Transport"
            renderPropCaption={() => (
              <>
                <div className="mt-2 flex items-start gap-2">
                  <BusFront size={16} />
                  <p className="grayscale-Body font-570">Nearest Bus Stop</p>
                </div>
                <p className="mt-2 text-[11px] font-570 leading-120 tracking-[0.75px] text-black">
                  Wembley Central Station
                </p>
                <p className="tracking-[0.25px mt-2 text-[11px] font-normal leading-120 text-[#4E4B66]">
                  2 min walk
                </p>
                <p className="mt-2 flex flex-wrap items-start gap-1">
                  <p className="items-center rounded-full bg-[#FFF1F0] px-2 py-0.5 text-[11px] font-normal leading-120 tracking-[0.25px] text-[#D83A21]">
                    18
                  </p>
                  <p className="items-center rounded-full bg-[#FFF1F0] px-2 py-0.5 text-[11px] font-normal leading-120 tracking-[0.25px] text-[#D83A21]">
                    92
                  </p>
                  <p className="items-center rounded-full bg-[#FFF1F0] px-2 py-0.5 text-[11px] font-normal leading-120 tracking-[0.25px] text-[#D83A21]">
                    182
                  </p>
                  <p className="items-center rounded-full bg-[#FFF1F0] px-2 py-0.5 text-[11px] font-normal leading-120 tracking-[0.25px] text-[#D83A21]">
                    204
                  </p>
                </p>
              </>
            )}
          />
          <LocationCard
            title=""
            renderPropCaption={() => (
              <>
                <div className="flex items-start gap-2">
                  <TramFront size={16} />
                  <p className="grayscale-Body font-570">
                    Nearest Train Station
                  </p>
                </div>
                <p className="mt-2 text-[11px] font-570 leading-120 tracking-[0.75px] text-black">
                  Wembley Central
                </p>
                <p className="tracking-[0.25px mt-2 text-[11px] font-normal leading-120 text-[#4E4B66]">
                  5 min walk
                </p>
                <div className="mt-2 flex flex-wrap items-start gap-1">
                  <p className="items-center rounded-full bg-[#FFF1F0] px-2 py-0.5 text-[11px] font-normal leading-120 tracking-[0.25px] text-[#D83A21]">
                    Bakerloo Line
                  </p>
                  <p className="items-center rounded-full bg-[#FFF1F0] px-2 py-0.5 text-[11px] font-normal leading-120 tracking-[0.25px] text-[#D83A21]">
                    London Overground
                  </p>
                </div>
              </>
            )}
          />
        </div>
        <div id={"contact"} />
      </div>
    </div>
  );
};

export default ContentSection;
