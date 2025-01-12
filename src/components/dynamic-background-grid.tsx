import React from "react";

interface BackgroundColumnProps {
  image: string;
  alt: string;
}

export const DynamicBackgroundGrid: React.FC<{
  columns: BackgroundColumnProps[];
}> = ({ columns }) => {
  return (
    <div className="absolute inset-0 grid grid-cols-5 h-full">
      {columns.map((column, index) => (
        <div key={index} className="relative h-full overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${column.image})` }}
            role="img"
            aria-label={column.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        </div>
      ))}
    </div>
  );
};