import React from 'react';

interface BackgroundColumnProps {
  image: string;
  alt: string;
}

export const DynamicBackgroundGrid: React.FC<{ columns: BackgroundColumnProps[] }> = ({ columns }) => {
  return (
    <div className="absolute inset-0 grid grid-cols-5 h-full">
      {columns.map((column, index) => (
        <div 
          key={index} 
          className="relative overflow-hidden"
          style={{ 
            backgroundImage: `url(${column.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}
    </div>
  );
};