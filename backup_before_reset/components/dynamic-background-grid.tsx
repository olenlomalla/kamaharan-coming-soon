<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
=======
import React from 'react';
>>>>>>> origin/main

interface BackgroundColumnProps {
  image: string;
  alt: string;
}

<<<<<<< HEAD
export const DynamicBackgroundGrid: React.FC<{
  columns: BackgroundColumnProps[];
}> = ({ columns }) => {
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    columnRefs.current.forEach((column, index) => {
      if (column) {
        const delay = index * 200; // Stagger the animations
        const direction = index % 2 === 0 ? '20px' : '-20px';
        
        column.style.opacity = '0';
        column.style.transform = `translateY(${direction})`;
        
        setTimeout(() => {
          column.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
          column.style.opacity = '1';
          column.style.transform = 'translateY(0)';
        }, delay);
      }
    });
  }, []);

=======
export const DynamicBackgroundGrid: React.FC<{ columns: BackgroundColumnProps[] }> = ({ columns }) => {
>>>>>>> origin/main
  return (
    <div className="absolute inset-0 grid grid-cols-5 h-full">
      {columns.map((column, index) => (
        <div 
          key={index} 
<<<<<<< HEAD
          ref={el => columnRefs.current[index] = el}
          className="relative h-full overflow-hidden group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${column.image})` }}
            role="img"
            aria-label={column.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
=======
          className="relative overflow-hidden"
          style={{ 
            backgroundImage: `url(${column.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
>>>>>>> origin/main
        </div>
      ))}
    </div>
  );
};