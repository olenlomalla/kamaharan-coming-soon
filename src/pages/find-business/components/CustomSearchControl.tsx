import React, { useState } from "react";
import { useMap, Marker, Popup } from "react-leaflet";

const CustomSearchControl: React.FC = () => {
  const map = useMap();
  const [query, setQuery] = useState("");
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );

  const doSearch = async () => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
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
      <div className="top-[125px] left-1/2 z-[1000] absolute flex justify-center items-center bg-[#EFEFEF] shadow-[0_2px_6px_rgba(0,0,0,0.3)] rounded-[24px] w-[320px] h-[57px] -translate-x-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-[38px] px-[10px] w-full"
        >
          <img
            src="/icons/dashboard/header/input-search.svg"
            alt="Search"
            onClick={doSearch}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent px-2 py-2 border-0 outline-none font-syne placeholder:font-syne font-medium placeholder:font-medium text-[#5B5A5E] text-[11px] placeholder:text-[#5B5A5E] placeholder:text-[11px] leading-[13.2px] placeholder:leading-[13.2px] tracking-[0.25px] placeholder:tracking-[0.25px]"
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
