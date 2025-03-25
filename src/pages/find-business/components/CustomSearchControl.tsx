import React, { useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const CustomSearchControl: React.FC = () => {
  const map = useMap();
  const [query, setQuery] = useState("");
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null,
  );

  const doSearch = async () => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query,
        )}`,
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);
        const newPosition: [number, number] = [lat, lon];
        setMarkerPosition(newPosition);
        map.setView(newPosition, 13, { animate: true });
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await doSearch();
  };

  return (
    <>
      <div className="absolute left-1/2 top-[125px] z-[1000] flex h-[57px] w-[320px] -translate-x-1/2 items-center justify-center rounded-[24px] bg-[#EFEFEF] shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center gap-[38px] px-[10px]"
        >
          <img
            src="/icons/dashboard/header/input-search.svg"
            alt="Search"
            onClick={doSearch}
            className="h-[15px] w-[15px] cursor-pointer"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 border-0 bg-transparent px-2 py-2 font-syne text-[11px] font-medium leading-[13.2px] tracking-[0.25px] text-[#5B5A5E] outline-none placeholder:font-syne placeholder:text-[11px] placeholder:font-medium placeholder:leading-[13.2px] placeholder:tracking-[0.25px] placeholder:text-[#5B5A5E]"
          />
        </form>
      </div>
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>You found position</Popup>
        </Marker>
      )}
    </>
  );
};

export default CustomSearchControl;
